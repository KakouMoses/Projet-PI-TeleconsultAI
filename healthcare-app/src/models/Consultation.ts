import mongoose from 'mongoose';
import Patient from './Patient';

const ConsultationSchema = new mongoose.Schema({
    idConsultation: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
    },
    patID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true,
    },
    dateConsultation: {
        type: Date,
        required: true,
    },
    detailsConsultation: {
        type: String,
        required: true,
    },
    discussionChatbot: {
        type: [String],
        required: true,
    },
    examens: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Examen',
    }],
    diagnostics: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Diagnostic',
    }],
});

ConsultationSchema.pre('save', async function(next) {
    const consultation = this;
    const patient = await Patient.findById(consultation.patID);
    if (!patient) {
      return next(new Error('Patient not found'));
    }
    next();
  });

const Consultation = mongoose.model('Consultation', ConsultationSchema);
export default Consultation;
