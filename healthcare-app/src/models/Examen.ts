import mongoose from 'mongoose';

const ExamenSchema = new mongoose.Schema({
    idExamen: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
    },
    dateExamen: {
        type: Date,
        required: true,
    },
    typeExamen: {
        type: String,
        required: true,
    },
    resultatsExamen: {
        type: String,
        required: true,
    },
    observationsExamen: {
        type: String,
        required: true,
    },
});

const Examen = mongoose.model('Examen', ExamenSchema);
export default Examen;
