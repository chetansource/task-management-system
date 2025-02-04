import express from 'express';
import {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
} from '../controllers/taskController';
import { createTaskSchema, updateTaskSchema } from '../utils/validation';
import { validateRequest } from '../middlwares/validateRequest';

const router = express.Router();

// Create a new task
router.post('/', validateRequest(createTaskSchema), createTask);

// Get all tasks
router.get('/', getAllTasks);

// Update a task
router.put('/:id', validateRequest(updateTaskSchema), updateTask);

// Delete a task
router.delete('/:id', deleteTask);

export default router;