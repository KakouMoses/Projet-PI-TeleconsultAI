import { Request, Response } from 'express';
import Consultation from '../models/Consultation';

// Create a new consultation
export const createConsultation = async (req: Request, res: Response) => {
    try {
        const { idConsultation, patID, dateConsultation, detailsConsultation, discussionChatbot, synthese, examens, diagnostics } = req.body;
        const newConsultation = new Consultation({
            idConsultation,
            patID,
            dateConsultation,
            detailsConsultation,
            discussionChatbot:[],
            synthese,
            examens,
            diagnostics,
        });
        await newConsultation.save();
        res.status(201).json(newConsultation);
    } catch (error) {
        if (error instanceof Error) {
        res.status(500).json({ message: error.message });
    } else {
        res.status(500).json({ message: 'An unknown error occurred' });
    }
    }
};

// Get all consultations
export const getConsultations = async (req: Request, res: Response) => {
    try {
        const consultations = await Consultation.find();
        res.status(200).send(consultations);
    } catch (error) {
        if (error instanceof Error) {
        res.status(500).json({ message: error.message });
    } else {
        res.status(500).json({ message: 'An unknown error occurred' });
    }
    }
};

// Get a single consultation by ID
export const getConsultationById = async (req: Request, res: Response) => {
    try {
        const consultation = await Consultation.findById(req.params.id);
        if (!consultation) {
            res.status(404).send();
        }
        res.status(200).send(consultation);
    } catch (error) {
        if (error instanceof Error) {
        res.status(500).json({ message: error.message });
    } else {
        res.status(500).json({ message: 'An unknown error occurred' });
    }
    }
};

// Update a consultation by ID
export const updateConsultation = async (req: Request, res: Response) => {
    try {
        const consultation = await Consultation.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!consultation) {
            res.status(404).send();
        }
        res.status(200).send(consultation);
    } catch (error) {
        if (error instanceof Error) {    
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};

// Delete a consultation by ID
export const deleteConsultation = async (req: Request, res: Response) => {
    try {
        const consultation = await Consultation.findByIdAndDelete(req.params.id);
        if (!consultation) {
            res.status(404).send();
        }
        res.status(200).send(consultation);
    } catch (error) {
        if (error instanceof Error) {    
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};

// Ajouter un message à la discussion
export const addMessageToConsultation = async (req: Request, res: Response) => {
    try {
        const { consultationId, message } = req.body;
        const consultation = await Consultation.findById(consultationId);
        if (!consultation) {
            res.status(404).json({ message: 'Consultation not found' });
        } else {
        consultation.discussionChatbot.push(message);
        await consultation.save();
        res.status(200).json(consultation);
        }
    } catch (error) {
        if (error instanceof Error) {
        res.status(500).json({ message: error.message });
    } else {
        res.status(500).json({ message: 'An unknown error occurred' });
    }
    }
};