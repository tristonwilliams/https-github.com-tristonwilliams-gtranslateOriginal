'use strict'

const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const translate = require('./translate');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Content Block App started on port ${PORT}`));

// app.use(express.static('./public'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.post('/translate', async(req, res) => {
    // console.log(req.body);

    let r = await translate.translate(req.body.text, req.body.from, req.body.to);
    if (r) {
        // console.log(r.text);
        res.send(r.text)
    } else
        res.send('Error');
});