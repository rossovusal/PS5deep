const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    gameName: { type: String, required: true },
    gameDate: { type: Date, required: true },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Participant' }]
});

module.exports = mongoose.model('Game', gameSchema);
