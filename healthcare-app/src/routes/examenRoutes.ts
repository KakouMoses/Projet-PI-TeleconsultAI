import express from 'express';
import { getAllExamens, getExamenById, createExamen, updateExamen, deleteExamen } from '../controllers/examenController';

const router = express.Router();

// Get all examens
router.get('/', getAllExamens);

// Get a single examen by ID
router.get('/:id', getExamenById);

// Create a new examen
router.post('/', createExamen);

// Update an existing examen
router.put('/:id', updateExamen);

// Delete an examen
router.delete('/:id', deleteExamen);

export default router;