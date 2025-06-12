const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    city: { type: String, required: true }
});

module.exports = mongoose.model('Participant', participantSchema);
