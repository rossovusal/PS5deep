const express = require('express');
const Game = require('../models/Game');
const router = express.Router();

router.post('/', async (req, res) => {
    const { gameName, gameDate, participants } = req.body;

    try {
        const game = new Game({ gameName, gameDate, participants });
        await game.save();
        res.status(201).send('Game added');
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
