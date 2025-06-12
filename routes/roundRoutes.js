const express = require('express');
const Round = require('../models/Round');
const router = express.Router();

router.post('/', async (req, res) => {
    const { roundName, game, roundDate } = req.body;

    try {
        const round = new Round({ roundName, game, roundDate });
        await round.save();
        res.status(201).send('Round added');
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
