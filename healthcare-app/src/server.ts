import express from 'express';
import connectDB from './config/db';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRouter';
import chatRoutes from './routes/chatRouter';
import patientRoutes from './routes/patientRoutes';
import consultationRoutes from './routes/consultationRoutes';
import medecinRoutes from './routes/medecinRoutes';

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(bodyParser.json());

// Define Routes
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/consultations', consultationRoutes);
app.use('/api/medecins', medecinRoutes);
app.use('/api/chat', chatRoutes);

const PORT = process.env.PORT || 2025;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
