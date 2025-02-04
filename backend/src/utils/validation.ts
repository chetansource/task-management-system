import { z } from 'zod';

// Define the schema for creating a task
export const createTaskSchema = z.object({
  name: z.string().min(3, 'Task name must be at least 3 characters long'),
  description: z.string().min(10, 'Description must be at least 10 characters long'),
  priority: z.enum(['Low', 'Medium', 'High']),
  status: z.enum(['To Do', 'In Progress', 'Completed']),
});

// Define the schema for updating a task
export const updateTaskSchema = z.object({
  name: z.string().min(3, 'Task name must be at least 3 characters long').optional(),
  description: z.string().min(10, 'Description must be at least 10 characters long').optional(),
  priority: z.enum(['Low', 'Medium', 'High']).optional(),
  status: z.enum(['To Do', 'In Progress', 'Completed']).optional(),
});

// Export the schemas
export type CreateTaskInput = z.infer<typeof createTaskSchema>;
export type UpdateTaskInput = z.infer<typeof updateTaskSchema>;