import dotenv from "dotenv";
dotenv.config();
import express from 'express';

const app = express();

const jokes = [
    {
        id: 1,
        title: "Joke1",
        content: "This is 1st joke"
    }, 
    {
        id: 2,
        title: "Joke2",
        content: "This is 2nd joke"
    }
];

// app.use(express.static('dist')) // this method of displaying data on browser can be accessed using backend and doesn't give any CORS error...This will take the dist folder content created using build from frontend side..(static data) and display on browser...

app.get('/api/jokes', (req, resp) => {
    resp.send(jokes);
})

app.listen(process.env.PORT, () => {
    console.log(`Running on port ${process.env.PORT}`);
});