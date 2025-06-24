"use strict";
exports.__esModule = true;
exports.secureDatabase = void 0;
var config_1 = require("../config");
exports.secureDatabase = function (sequelize) {
    // 1. Row-Level Security (PostgreSQL)
    sequelize.query("\n    ALTER TABLE users ENABLE ROW LEVEL SECURITY;\n    CREATE POLICY user_policy ON users\n      USING (id = current_user_id() OR current_user_role() = 'admin');\n  ");
    // 2. Data Encryption
    sequelize.query("\n    CREATE EXTENSION IF NOT EXISTS pgcrypto;\n    CREATE OR REPLACE FUNCTION encrypt_data(text) RETURNS bytea AS $$\n      BEGIN\n        RETURN pgp_sym_encrypt($1, '" + config_1.config.db.encryptionKey + "');\n      END;\n    $$ LANGUAGE plpgsql;\n  ");
    // 3. Audit Triggers
    sequelize.query("\n    CREATE OR REPLACE FUNCTION audit_trigger()\n    RETURNS TRIGGER AS $$\n    BEGIN\n      IF (TG_OP = 'DELETE') THEN\n        INSERT INTO audit_log(action, entity_type, entity_id, details)\n        VALUES ('delete', TG_TABLE_NAME, OLD.id, to_jsonb(OLD));\n        RETURN OLD;\n      ELSIF (TG_OP = 'UPDATE') THEN\n        INSERT INTO audit_log(action, entity_type, entity_id, details)\n        VALUES ('update', TG_TABLE_NAME, NEW.id, jsonb_build_object(\n          'old', to_jsonb(OLD),\n          'new', to_jsonb(NEW)\n        ));\n        RETURN NEW;\n      ELSIF (TG_OP = 'INSERT') THEN\n        INSERT INTO audit_log(action, entity_type, entity_id, details)\n        VALUES ('insert', TG_TABLE_NAME, NEW.id, to_jsonb(NEW));\n        RETURN NEW;\n      END IF;\n      RETURN NULL;\n    END;\n    $$ LANGUAGE plpgsql;\n  ");
    // Apply to all tables
    var tables = ['users', 'operators', 'machines', 'shifts', 'schedules', 'schedule_entries'];
    tables.forEach(function (table) {
        sequelize.query("\n      CREATE TRIGGER " + table + "_audit\n      AFTER INSERT OR UPDATE OR DELETE ON " + table + "\n      FOR EACH ROW EXECUTE FUNCTION audit_trigger();\n    ");
    });
};
