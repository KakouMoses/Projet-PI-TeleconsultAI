import express from 'express';
import { sendMessageToModel } from '../controllers/chatController';

const router = express.Router();

router.post('/send-message', sendMessageToModel);

export default router;