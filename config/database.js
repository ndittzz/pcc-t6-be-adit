import { Sequelize } from 'sequelize';

const db = new Sequelize('db_notes', 'root', '', {
    host: '35.224.30.242',
    dialect: 'mysql'
});

export default db;
