const mongoose = require('mongoose');

const predictionSchema = new mongoose.Schema({
    round: { type: mongoose.Schema.Types.ObjectId, ref: 'Round', required: true },
    participant: { type: mongoose.Schema.Types.ObjectId, ref: 'Participant', required: true },
    prediction: { type: String, required: true },
    status: { type: String, default: 'pending' } // e.g., 'pending', 'correct', 'incorrect'
});

module.exports = mongoose.model('Prediction', predictionSchema);
