import mongoose from 'mongoose';

const DiagnosticSchema = new mongoose.Schema({
    idDiagnostic: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
    },
    dateDiagnostic: {
        type: Date,
        required: true,
    },
    conclusionDiagnostic: {
        type: String,
        required: true,
    },
    examensSuggeres: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Examen',
    }],
    remarques: {
        type: String,
    },
});

const Diagnostic = mongoose.model('Diagnostic', DiagnosticSchema);
export default Diagnostic;
