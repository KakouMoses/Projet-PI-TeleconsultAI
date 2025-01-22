import mongoose from 'mongoose';

const MedecinSchema = new mongoose.Schema({
    idMedecin: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
    },
    matriculeMedecin: {
        type: String,
        required: true,
    },
    nomMedecin: {
        type: String,
        required: true,
    },
    prenomMedecin: {
        type: String,
        required: true,
    },
    roleMedecin: {
        type: String,
        required: true,
    },
    specialite: {
        type: String,
        required: true,
    },
    anneesExperience: {
        type: Number,
        required: true,
    },
});

const Medecin = mongoose.model('Medecin', MedecinSchema);
export default Medecin;
