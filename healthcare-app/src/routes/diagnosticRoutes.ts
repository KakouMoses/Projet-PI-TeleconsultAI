import express from 'express';
import { getDiagnostics, getDiagnosticById, createDiagnostic, updateDiagnostic, deleteDiagnostic } from '../controllers/diagnosticController';

const router = express.Router();

router.get('/diagnostics', getDiagnostics);
router.get('/diagnostics/:id', getDiagnosticById);
router.post('/diagnostics', createDiagnostic);
router.put('/diagnostics/:id', updateDiagnostic);
router.delete('/diagnostics/:id', deleteDiagnostic);

export default router;