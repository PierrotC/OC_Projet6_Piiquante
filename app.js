const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const auth = require('./middleware/auth');
const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauces');

const app = express();
mongoose.connect('mongodb+srv://PierrotC:ky8DtCSUG1dZv5LQ@cluster0.n0f7a.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected successfully!'))
    .catch(() => console.log('Failed to connect to MongoDB...'));

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoutes);
app.use('/api/sauces', auth, sauceRoutes);

module.exports = app;