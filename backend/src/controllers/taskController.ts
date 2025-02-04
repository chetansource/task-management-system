import { Request, Response } from 'express';
import Task from '../models/taskModel';
import { CreateTaskInput, UpdateTaskInput } from '../utils/validation';

// Create a new task
export const createTask = async (req: Request, res: Response) => {
  try {
    const { name, description, priority, status }: CreateTaskInput = req.body;

    const newTask = await Task.create({ name, description, priority, status });
    res.status(201).json({ success: true, data: newTask });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to create task', error: (err as Error).message });
  }
};

// Get all tasks
export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ success: true, data: tasks });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch tasks', error: (err as Error).message });
  }
};

// Update a task
export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData: UpdateTaskInput = req.body;

    const updatedTask = await Task.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedTask) {
      res.status(404).json({ success: false, message: 'Task not found' });
      return;
    }
    res.status(200).json({ success: true, data: updatedTask });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to update task', error: (err as Error).message });
  }
};

// Delete a task
export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      res.status(404).json({ success: false, message: 'Task not found' });
      return
    }
    res.status(200).json({ success: true, message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to delete task', error: (err as Error).message });
  }
};

