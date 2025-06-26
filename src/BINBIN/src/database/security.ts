import { Sequelize } from 'sequelize-typescript';
import { config } from '../config';

export const secureDatabase = (sequelize: Sequelize) => {
  // 1. Row-Level Security (PostgreSQL)
  sequelize.query(`
    ALTER TABLE users ENABLE ROW LEVEL SECURITY;
    CREATE POLICY user_policy ON users
      USING (id = current_user_id() OR current_user_role() = 'admin');
  `);

  // 2. Data Encryption
  sequelize.query(`
    CREATE EXTENSION IF NOT EXISTS pgcrypto;
    CREATE OR REPLACE FUNCTION encrypt_data(text) RETURNS bytea AS $$
      BEGIN
        RETURN pgp_sym_encrypt($1, '${config.db.encryptionKey}');
      END;
    $$ LANGUAGE plpgsql;
  `);

  // 3. Audit Triggers
  sequelize.query(`
    CREATE OR REPLACE FUNCTION audit_trigger()
    RETURNS TRIGGER AS $$
    BEGIN
      IF (TG_OP = 'DELETE') THEN
        INSERT INTO audit_log(action, entity_type, entity_id, details)
        VALUES ('delete', TG_TABLE_NAME, OLD.id, to_jsonb(OLD));
        RETURN OLD;
      ELSIF (TG_OP = 'UPDATE') THEN
        INSERT INTO audit_log(action, entity_type, entity_id, details)
        VALUES ('update', TG_TABLE_NAME, NEW.id, jsonb_build_object(
          'old', to_jsonb(OLD),
          'new', to_jsonb(NEW)
        ));
        RETURN NEW;
      ELSIF (TG_OP = 'INSERT') THEN
        INSERT INTO audit_log(action, entity_type, entity_id, details)
        VALUES ('insert', TG_TABLE_NAME, NEW.id, to_jsonb(NEW));
        RETURN NEW;
      END IF;
      RETURN NULL;
    END;
    $$ LANGUAGE plpgsql;
  `);

  // Apply to all tables
  const tables = ['users', 'operators', 'machines', 'shifts', 'schedules', 'schedule_entries'];
  tables.forEach(table => {
    sequelize.query(`
      CREATE TRIGGER ${table}_audit
      AFTER INSERT OR UPDATE OR DELETE ON ${table}
      FOR EACH ROW EXECUTE FUNCTION audit_trigger();
    `);
  });
};