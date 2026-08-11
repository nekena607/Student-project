import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : undefined,
    database: process.env.DB_NAME,
});

pool.connect()
    .then((client) => {
        console.log('Connecté à PostgreSQL');
        client.release();
    })
    .catch((err: Error) => {
        console.error('Erreur de connexion à PostgreSQL :', err.message);
    });

export default pool;
