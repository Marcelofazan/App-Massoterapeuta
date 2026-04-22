import Sequelize from 'sequelize';

const sequelize = new Sequelize('SEUBANCO', 'postgres', 'SUASENHA', {
  host: 'localhost',
  dialect: 'postgres',
  define: {
      timestamps: false,
    },
});

export default sequelize;

// Test connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}