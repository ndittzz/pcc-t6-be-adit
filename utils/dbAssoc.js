import sequelize from "../config/database.js";

// Fungsi sinkronisasi database
const association = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Database & tables synced!');
  } catch (error) {
    console.error('Failed to sync database:', error.message);
  }
};

export default association;