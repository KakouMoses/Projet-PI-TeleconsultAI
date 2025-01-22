import mongoose from 'mongoose';

const PatientSchema = new mongoose.Schema({
    idPatient: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
    },
    codePatient: {
        type: String,
        required: true,
    },
    dateNaissance: {
        type: Date,
        required: true,
    },
    sexePatient: {
        type: String,
        required: true,
    },
    consultations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Consultation',
    }],
});

const Patient = mongoose.model('Patient', PatientSchema);
export default Patient;
