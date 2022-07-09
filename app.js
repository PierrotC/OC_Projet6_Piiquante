const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://PierrotC:KBmQd5j4UT77Pkt@ocpc.nbxrm.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected successfully!'))
    .catch(() => console.log('Failed to connect to MongoDB...'));

module.exports = app;