require('dotenv').config()
const express = require('express');
const app = express();
const PORT = 3000;


app.get('/', (req, resp) => {
    resp.send('Hello World!');
})

app.get('/twitter', (req, resp) => {
    resp.send('Twitter.com');
})

app.get('/youtube', (req, resp) => {
    resp.send('<p>Youtube.com</p>')
})

app.get('/login', (req, resp) => resp.send("<h1>Please login to anupam's page</h1>"))

app.listen(process.env.PORT, () => console.log(`Example app listening at ${process.env.PORT}`))