import sequelize from "../config/database.js";
import User from '../model/UsersModel.js';
import Note from '../model/notesmodel.js';

// Relasi
User.hasMany(Note, { foreignKey: 'userId' });
Note.belongsTo(User, { foreignKey: 'userId' });

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