import pool from '../config/db';
import { Student, StudentInput } from '../types/student';

const findAll = async (): Promise<Student[]> => {
    const result = await pool.query('SELECT * FROM etudiants ORDER BY id ASC');
    return result.rows;
};

const findById = async (id: string | number): Promise<Student | undefined> => {
    const result = await pool.query('SELECT * FROM etudiants WHERE id = $1', [id]);
    return result.rows[0];
};

const create = async ({ first_name, last_name, email, age }: StudentInput): Promise<Student> => {
    const result = await pool.query(
        `INSERT INTO etudiants (first_name, last_name, email, age)
         VALUES ($1, $2, $3, $4)
         RETURNING *`,
        [first_name, last_name, email, age]
    );
    return result.rows[0];
};

const update = async (
    id: string | number,
    { first_name, last_name, email, age }: StudentInput
): Promise<Student | undefined> => {
    const result = await pool.query(
        `UPDATE etudiants
         SET first_name = $1, last_name = $2, email = $3, age = $4
         WHERE id = $5
         RETURNING *`,
        [first_name, last_name, email, age, id]
    );
    return result.rows[0];
};

const remove = async (id: string | number): Promise<Student | undefined> => {
    const result = await pool.query('DELETE FROM etudiants WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
};

export default {
    findAll,
    findById,
    create,
    update,
    remove,
};
