import studentRepository from '../repositories/studentRepository';
import { Student, StudentInput } from '../types/student';

export class AppError extends Error {
    statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
    }
}

const getAllStudents = async (): Promise<Student[]> => {
    return studentRepository.findAll();
};

const getStudentById = async (id: string): Promise<Student> => {
    const student = await studentRepository.findById(id);
    if (!student) {
        throw new AppError(`Étudiant avec l'id ${id} introuvable`, 404);
    }
    return student;
};

const createStudent = async (data: StudentInput): Promise<Student> => {
    const { first_name, last_name, email, age } = data;

    if (!first_name || !last_name || !email) {
        throw new AppError('first_name, last_name et email sont obligatoires', 400);
    }
    if (age !== undefined && age !== null && (typeof age !== 'number' || isNaN(age) || age < 0)) {
        throw new AppError("L'âge doit être un nombre positif", 400);
    }

    return studentRepository.create({ first_name, last_name, email, age });
};

const updateStudent = async (id: string, data: StudentInput): Promise<Student> => {
    const { first_name, last_name, email, age } = data;

    if (!first_name || !last_name || !email) {
        throw new AppError('first_name, last_name et email sont obligatoires', 400);
    }

    const updated = await studentRepository.update(id, { first_name, last_name, email, age });
    if (!updated) {
        throw new AppError(`Étudiant avec l'id ${id} introuvable`, 404);
    }
    return updated;
};

const deleteStudent = async (id: string): Promise<Student> => {
    const deleted = await studentRepository.remove(id);
    if (!deleted) {
        throw new AppError(`Étudiant avec l'id ${id} introuvable`, 404);
    }
    return deleted;
};

export default {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
    AppError,
};
