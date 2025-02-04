import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes';
import connectDB from './config/db';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/tasks', taskRoutes);

// Start the server and connect to the database
const startServer = async () => {
  try {
    await connectDB(); // Connect to MongoDB
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start the server', err);
    process.exit(1); // Exit the process if the server fails to start
  }
};

startServer();
