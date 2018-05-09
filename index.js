'use strict'

// Barebones to serve index.html

let express = require('express');

let app = express();
const PORT = process.env.PORT || 5000;

console.log('Content Block App started');
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

app.use(express.static('.'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile('index.html');
});