import { Sequelize } from 'sequelize';
import { metricsClient } from './prometheus';

export const setupDatabaseMetrics = (sequelize: Sequelize) => {
  // Track query performance
  sequelize.addHook('afterQuery', (options: any, query: any) => {
    metricsClient.histogram('database_query_duration_seconds', {
      query: options.type,
      model: options.model?.name
    }).observe(query.duration);
  });

  // Track connection pool metrics
  setInterval(async () => {
    const pool = (sequelize.connectionManager as any).pool;
    metricsClient.gauge('database_pool_size').set(pool.size);
    metricsClient.gauge('database_pool_available').set(pool.available);
    metricsClient.gauge('database_pool_waiting').set(pool.waiting);
  }, 5000);
};
