import express from "express";

import { getAffirmations, addAffirmations } from "./src/affirmation.js";
import cors from "cors"


const PORT = 3030;

const app = express();
app.use(cors());
app.use(express.json());






// set up routes
app.get('/affirmations', getAffirmations)
app.post('/affirmations', addAffirmations)
// app.patch()





app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}...`))