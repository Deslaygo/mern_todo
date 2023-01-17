import express from 'express';
import cors from 'cors';
import { SERVER_PORT } from './config.js'

import indexRoutes from './routes/index.routes.js';
import tasksRoutes from './routes/tasks.routes.js';

const app = express(); 


app.use(cors())
app.use(express.json());

app.use(indexRoutes);
app.use(tasksRoutes);

app.listen(SERVER_PORT);
console.log("SERVIDOR EJECUTANDO EN PUERTO: ", SERVER_PORT);