import { Request, Response } from 'express';
import axios from 'axios';

// Envoyer un message au modèle de langage et capturer la réponse
export const sendMessageToModel = async (req: Request, res: Response) => {
    try {
        const { consultationId, userMessage } = req.body;
        const response = await axios.post('https://api.language_model.com/chat', { message: userMessage });
        const botMessage = response.data.reply;

        // Ajouter les messages à la discussion
        await axios.post('http://localhost:2024/api/consultations/add-message', { consultationId, message: "Patient: " + userMessage });
        await axios.post('http://localhost:2024/api/consultations/add-message', { consultationId, message: "IA: " + botMessage });

        res.status(200).json({ userMessage, botMessage });
    } catch (error) {
        if (error instanceof Error) {
        res.status(500).json({ message: error.message });
        } else {
        res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};