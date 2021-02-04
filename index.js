const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const config = require('./config/dev');

const { User } = require("./models/User");

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true
}).then(() => {
    console.log("mongodb connected");
}).catch((err) => {
    console.log(err);
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("angss");
});

app.post('/register', (req, res) => {
    const user = new User(req.body);
    user.save((err, userInfo) => {
        if(err) {
            return res.json({ success: false, err });
        }
        return res.status(200).json({ success: true });
    });
})

app.listen(3000, () => {
    console.log("localhost:3000 connected");
});