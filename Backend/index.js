require('dotenv').config();
const express = require("express"); // require module syntax have been used here... Similarly import module syntax is there...
const app = express();

app.get('/', (req, resp, next) => {
    resp.send('Hello World');
})

app.get('/twitter', (req, resp) => {
    resp.send('twitterdotcom');
})

app.get('/login', (req, resp) => {
    resp.send('<h1>Login to the data.</h1>');
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
})