const express = require('express');
const Prediction = require('../models/Prediction');
const router = express.Router();

router.post('/', async (req, res) => {
    const { round, participant, prediction } = req.body;

    try {
        const newPrediction = new Prediction({ round, participant, prediction });
        await newPrediction.save();
        res.status(201).send('Prediction added');
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
