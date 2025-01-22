// src/routes/patientRoutes.ts
import express from 'express';
import { createPatient, getPatients, getPatientById, addConsultationToPatient } from '../controllers/patientController';

const router = express.Router();

router.post('/', createPatient);
router.get('/', getPatients);
router.get('/:id', getPatientById);
router.post('/:id/consultations', addConsultationToPatient);

export default router;
