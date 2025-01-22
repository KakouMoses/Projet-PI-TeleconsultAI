import { Request, Response } from 'express';
import Medecin from '../models/Medecin';

// Create a new medecin
export const createMedecin = async (req: Request, res: Response) => {
    try {
        const medecin = new Medecin(req.body);
        await medecin.save();
        res.status(201).json(medecin);
    } catch (error) {
        res.status(500).json({ message: 'Error creating medecin', error });
    }
};

// Get all medecins
export const getMedecins = async (req: Request, res: Response) => {
    try {
        const medecins = await Medecin.find();
        res.status(200).json(medecins);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching medecins', error });
    }
};

// Get a single medecin by ID
export const getMedecinById = async (req: Request, res: Response) => {
    try {
        const medecin = await Medecin.findById(req.params.id);
        if (!medecin) {
            res.status(404).json({ message: 'Medecin not found' });
        }
        res.status(200).json(medecin);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching medecin', error });
    }
};

// Update a medecin by ID
export const updateMedecin = async (req: Request, res: Response) => {
    try {
        const medecin = await Medecin.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!medecin) {
            res.status(404).json({ message: 'Medecin not found' });
        }
        res.status(200).json(medecin);
    } catch (error) {
        res.status(500).json({ message: 'Error updating medecin', error });
    }
};

// Delete a medecin by ID
export const deleteMedecin = async (req: Request, res: Response) => {
    try {
        const medecin = await Medecin.findByIdAndDelete(req.params.id);
        if (!medecin) {
            res.status(404).json({ message: 'Medecin not found' });
        }
        res.status(200).json({ message: 'Medecin deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting medecin', error });
    }
};
