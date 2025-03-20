import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Notes = db.define('notes', {
    judul: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    deskripsi: { 
        type: DataTypes.TEXT, 
        allowNull: true 
    },
    author: { 
        type: DataTypes.STRING,
        allowNull: false 
    }
}, {
    freezeTableName: true,
    createdAt: 'tanggal_dibuat',
    updatedAt: 'tanggal_diperbarui'
});

export default Notes;
