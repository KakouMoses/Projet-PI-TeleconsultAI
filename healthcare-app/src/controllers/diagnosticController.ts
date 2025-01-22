import { Request, Response } from 'express';
import Diagnostic from '../models/Diagnostic';

// Create a new diagnostic
export const createDiagnostic = async (req: Request, res: Response) => {
    try {
        const diagnostic = new Diagnostic(req.body);
        await diagnostic.save();
        res.status(201).json(diagnostic);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: 'Error creating diagnostic', error });
        } else {
            res.status(500).json({ message: 'Unknown error occurred while creating diagnostic' });
        }
    }
};

// Get all diagnostics
export const getDiagnostics = async (req: Request, res: Response) => {
    try {
        const diagnostics = await Diagnostic.find();
        res.status(200).json(diagnostics);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: 'Error fetching diagnostics', error });
        } else {
            res.status(500).json({ message: 'Unknown error occurred while fetching diagnostics' });
        }
    }
};

// Get a single diagnostic by ID
export const getDiagnosticById = async (req: Request, res: Response) => {
    try {
        const diagnostic = await Diagnostic.findById(req.params.id);
        if (!diagnostic) {
            res.status(404).json({ message: 'Diagnostic not found' });
        }
        res.status(200).json(diagnostic);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: 'Error fetching diagnostic', error });
        } else {
            res.status(500).json({ message: 'Unknown error occurred while fetching diagnostic' });
        }
    }
};

// Update a diagnostic by ID
export const updateDiagnostic = async (req: Request, res: Response) => {
    try {
        const diagnostic = await Diagnostic.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!diagnostic) {
            res.status(404).json({ message: 'Diagnostic not found' });
        }
        res.status(200).json(diagnostic);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: 'Error updating diagnostic', error });
        } else {
            res.status(500).json({ message: 'Unknown error occurred while updating diagnostic' });
        }
    }
};

// Delete a diagnostic by ID
export const deleteDiagnostic = async (req: Request, res: Response) => {
    try {
        const diagnostic = await Diagnostic.findByIdAndDelete(req.params.id);
        if (!diagnostic) {
            res.status(404).json({ message: 'Diagnostic not found' });
        }
        res.status(200).json({ message: 'Diagnostic deleted successfully' });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: 'Error deleting diagnostic', error });
        } else {
            res.status(500).json({ message: 'Unknown error occurred while deleting diagnostic' });
        }
    }
};