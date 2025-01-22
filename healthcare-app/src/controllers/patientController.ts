// src/controllers/patientController.ts
import { NextFunction, Request, Response } from 'express';
import Patient from '../models/Patient';
import Consultation from '../models/Consultation';
import mongoose from 'mongoose';

// Créer un nouveau patient
export const createPatient = async (req: Request, res: Response) => {
    try {
        const { idPatient, codePatient, dateNaissance, sexePatient } = req.body;
        const newPatient = new Patient({ idPatient, codePatient, dateNaissance, sexePatient });
        await newPatient.save();
        res.status(201).json(newPatient);
    } catch (error) {
        if (error instanceof Error) {
        res.status(500).json({ message: error.message });
    } else {
        res.status(500).json({ message: 'An unknown error occurred' });
    }
}
};

// Obtenir tous les patients
export const getPatients = async (req: Request, res: Response) => {
    try {
        const patients = await Patient.find().populate('consultations');
        res.status(200).json(patients);
    } catch (error) {
        if (error instanceof Error) {
        res.status(500).json({ message: error.message });
    } else {
        res.status(500).json({ message: 'An unknown error occurred' });
    }
};
}

// Obtenir un patient par ID
export const getPatientById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const patient = await Patient.findById(id).populate('consultations').exec();
        if (!patient) {
            res.status(404).json({ message: 'Patient not found' });
        }
        res.status(200).json(patient);
    } catch (error) {
        if (error instanceof Error) {
        res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
    
};

// Ajouter une consultation à un patient
export const addConsultationToPatient = async (req: Request, res: Response) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) {
            res.status(404).json({ message: 'Patient not found' });
        } else {
        const newConsultation = new Consultation(req.body);
        await newConsultation.save();
        patient.consultations.push(newConsultation._id as mongoose.Types.ObjectId);
        await patient.save();
        res.status(201).json(newConsultation);
    }
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};

// Mettre à jour un patient par ID
export const updatePatientById = async (req: Request, res: Response) => {
    try {
        const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPatient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.status(200).json(updatedPatient);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};

// Supprimer un patient par ID
export const deletePatientById = async (req: Request, res: Response) => {
    try {
        const deletedPatient = await Patient.findByIdAndDelete(req.params.id);
        if (!deletedPatient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.status(200).json({ message: 'Patient deleted successfully' });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};