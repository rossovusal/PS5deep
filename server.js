const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// Mongoose model importları
const User = require('./models/User');
const Participant = require('./models/Participant');
const Game = require('./models/Game');
const Round = require('./models/Round');
const Prediction = require('./models/Prediction');

app.use(bodyParser.json());
app.use(cors());

// MongoDB bağlantısı
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// Routes importu
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Backend serveri başlatmaq
app.listen(5000, () => {
    console.log('Server running on port 5000');
});
