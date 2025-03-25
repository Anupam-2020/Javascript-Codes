import { configDotenv } from "dotenv";
import express from "express";
import cors from 'cors';

configDotenv();
const app = express();
app.use(cors())

app.use(express.static('dist'))

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

app.get("/api/jokes/", (req, resp) => {
  let jokes = [
    {
      type: "general",
      setup: "Two guys walk into a bar . . .",
      punchline:
        "The first guy says 'Ouch!' and the second says 'Yeah, I didn't see it either.",
      id: 365,
    },
    {
      type: "general",
      setup: "Why do scuba divers fall backwards into the water?",
      punchline: "Because if they fell forwards they’d still be in the boat.",
      id: 351,
    },
    {
      type: "general",
      setup: "What do you call a careful wolf?",
      punchline: "Aware wolf.",
      id: 194,
    },
  ];

  resp.send(jokes)
});

app.listen(process.env.PORT, () =>
  console.log(`Server is running at port ${process.env.PORT}`)
);
