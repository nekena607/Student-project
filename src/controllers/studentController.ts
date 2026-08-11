import { Request, Response, NextFunction } from 'express';
import studentService from '../services/studentService';

const getIdParam = (req: Request): string => {
    const { id } = req.params;
    return Array.isArray(id) ? id[0] : id;
};

const getAll = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const students = await studentService.getAllStudents();
        res.status(200).json(students);
    } catch (err: unknown) {
        next(err);
    }
};

const getById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const student = await studentService.getStudentById(getIdParam(req));
        res.status(200).json(student);
    } catch (err: unknown) {
        next(err);
    }
};

const create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const newStudent = await studentService.createStudent(req.body);
        res.status(201).json(newStudent);
    } catch (err: unknown) {
        next(err);
    }
};

const update = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const updated = await studentService.updateStudent(getIdParam(req), req.body);
        res.status(200).json(updated);
    } catch (err: unknown) {
        next(err);
    }
};

const remove = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        await studentService.deleteStudent(getIdParam(req));
        res.status(204).send();
    } catch (err: unknown) {
        next(err);
    }
};

export default {
    getAll,
    getById,
    create,
    update,
    remove,
};