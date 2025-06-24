export const optimizeDatabase = async (sequelize) => {
  // 1. Create materialized views for frequent queries
  await sequelize.query(`
    CREATE MATERIALIZED VIEW IF NOT EXISTS weekly_schedule_summary AS
    SELECT 
      s.week_number,
      s.year,
      COUNT(se.id) as entries_count,
      COUNT(DISTINCT se.operator_id) as operators_count,
      COUNT(DISTINCT se.machine_id) as machines_count
    FROM schedules s
    LEFT JOIN schedule_entries se ON s.id = se.schedule_id
    GROUP BY s.id;
  `);

  // 2. Create indexes for common query patterns
  await sequelize.query(`
    CREATE INDEX IF NOT EXISTS idx_schedule_operator_date ON schedule_entries(operator_id, date);
    CREATE INDEX IF NOT EXISTS idx_schedule_machine_date ON schedule_entries(machine_id, date);
  `);

  // 3. Configure database parameters
  await sequelize.query(`
    ALTER SYSTEM SET work_mem = '64MB';
    ALTER SYSTEM SET maintenance_work_mem = '256MB';
    ALTER SYSTEM SET random_page_cost = 1.1;
    ALTER SYSTEM SET effective_cache_size = '4GB';
  `);

  // 4. Set up partitioning for large tables
  await sequelize.query(`
    CREATE TABLE IF NOT EXISTS schedule_entries_partitioned (
      LIKE schedule_entries INCLUDING INDEXES
    ) PARTITION BY RANGE (date);
    
    CREATE TABLE schedule_entries_y2023 PARTITION OF schedule_entries_partitioned
      FOR VALUES FROM ('2023-01-01') TO ('2024-01-01');
  `);
};