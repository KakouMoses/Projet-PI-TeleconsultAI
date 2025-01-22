import { Router } from 'express';
import { getConsultations, getConsultationById, createConsultation, updateConsultation, deleteConsultation, addMessageToConsultation } from '../controllers/consultationController';

const router = Router();

// Get all consultations
router.get('/', getConsultations);

// Get a single consultation by ID
router.get('/:id', getConsultationById);

// Create a new consultation
router.post('/', createConsultation);

router.post('/add-message', addMessageToConsultation);

// Update an existing consultation
router.put('/:id', updateConsultation);

// Delete a consultation
router.delete('/:id', deleteConsultation);

export default router;