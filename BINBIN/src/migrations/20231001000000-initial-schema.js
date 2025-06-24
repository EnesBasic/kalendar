module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      // ... all other columns
    });

    // Create all other tables
  },

  down: async (queryInterface) => {
    await queryInterface.dropAllTables();
  }
};