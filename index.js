import express from 'express';
import cors from 'cors';
import db from './config/database.js';
import router from './routes/route.js';

const app = express();

// Sinkronisasi database
(async () => {
    try {
        await db.authenticate();
        console.log('Database connected...');
        await db.sync(); // Pastikan tabel sudah ada
    } catch (error) {
        console.error('Connection error:', error);
    }
})();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log('Server up and running on port 5000...'));
