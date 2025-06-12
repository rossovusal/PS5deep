const express = require('express');
const Participant = require('../models/Participant');
const router = express.Router();

router.post('/', async (req, res) => {
    const { name, age, city } = req.body;

    try {
        const participant = new Participant({ name, age, city });
        await participant.save();
        res.status(201).send('Participant added');
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
