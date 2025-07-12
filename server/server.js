import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import userRouter from './routes/UserRoutes.js'
// App Config
const  PORT = process.env.PORT || 4000;
const app = express(); 

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.get('/', (req, res) => res.send('API is working'));
app.use('/api/user', userRouter);
app.listen(PORT, () => console.log("Server is running on port " + PORT));
