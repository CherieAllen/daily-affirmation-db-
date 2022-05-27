import functions from "firebase-functions";
import express from 'express';
import cors from 'cors';

import { getAffirmations, addAffirmations } from "./src/affirmation.js";


const app = express();
app.use(cors());
app.use(express.json());



// set up routes
app.get('/affirmations', getAffirmations)
app.post('/affirmations', addAffirmations)


export const api = functions.https.onRequest(app);