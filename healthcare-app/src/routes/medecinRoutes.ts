import { Router } from 'express';
import { getMedecins, getMedecinById, createMedecin, updateMedecin, deleteMedecin } from '../controllers/medecinController';

const router = Router();

// Get all medecins
router.get('/', getMedecins);

// Get a single medecin by ID
router.get('/:id', getMedecinById);

// Create a new medecin
router.post('/', createMedecin);

// Update an existing medecin
router.put('/:id', updateMedecin);

// Delete a medecin
router.delete('/:id', deleteMedecin);

export default router;