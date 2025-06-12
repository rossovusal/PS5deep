const mongoose = require('mongoose');

const roundSchema = new mongoose.Schema({
    roundName: { type: String, required: true },
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true },
    roundDate: { type: Date, required: true }
});

module.exports = mongoose.model('Round', roundSchema);
