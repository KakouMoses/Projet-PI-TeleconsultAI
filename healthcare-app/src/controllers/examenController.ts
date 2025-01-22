import { Request, Response } from 'express';
import Examen  from '../models/Examen';

// Create a new examen
export const createExamen = async (req: Request, res: Response) => {
    try {
        const examen = new Examen(req.body);
        await examen.save();
        res.status(201).send(examen);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all examens
export const getAllExamens = async (req: Request, res: Response) => {
    try {
        const examens = await Examen.find();
        res.status(200).send(examens);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a single examen by ID
export const getExamenById = async (req: Request, res: Response) => {
    try {
        const examen = await Examen.findById(req.params.id);
        if (!examen) {
            res.status(404).send();
        }
        res.status(200).send(examen);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update an examen by ID
export const updateExamen = async (req: Request, res: Response) => {
    try {
        const examen = await Examen.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!examen) {
            res.status(404).send();
        }
        res.status(200).send(examen);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete an examen by ID
export const deleteExamen = async (req: Request, res: Response) => {
    try {
        const examen = await Examen.findByIdAndDelete(req.params.id);
        if (!examen) {
            res.status(404).send();
        }
        res.status(200).send(examen);
    } catch (error) {
        res.status(500).send(error);
    }
};