import express from 'express'
import cors from'cors'

import authRoutes from "./routes/auth.routes.js"

const app=express();



// enable cors

app.use(express.json())

//error handling middleware


app.use('/api/auth', authRoutes); // Your routes here

// Error-handling middleware must come last
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    message,
  });
});



app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true, 
  }));

  app.use('/api/auth',authRoutes)



  


export default app;