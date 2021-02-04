const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jindun619:apitong133@boiler-plate.crezm.mongodb.net/db?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true
}).then(() => {
    console.log("mongodb connected");
}).catch((err) => {
    console.log(err);
});

app.get('/', (req, res) => {
    res.send("connected");
});

app.listen(3000, () => {
    console.log("connected");
});