import { Task } from "@/types/task";

const API_URL = import.meta.env.VITE_API_BASE_URL

export interface TaskResponse {
  success: boolean;
  data?: any;
  error?: string;
}

// Create a new task
export const createTask = async (task: Omit<Task, 'id' | 'created_at' | 'updated_at'>): Promise<TaskResponse> => {
  try {
    const response = await fetch(`${API_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    const data = await response.json();
    return { success: response.ok, data };
  } catch (error) {
    console.error('Error creating task:', error);
    return { success: false, error: 'Failed to create task' };
  }
};

// Fetch all tasks
export const fetchTasks = async ( ): Promise<TaskResponse> => {
  try {
    const response = await fetch(`${API_URL}/tasks`);
    const result = await response.json();
    return { success: response.ok, data:result.data };
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return { success: false, error: 'Failed to fetch tasks' };
  }
};

// Update a task
export const updateTask = async (id: string, task: Omit<Task, 'id' | 'created_at' | 'updated_at'>): Promise<TaskResponse> => {
  try {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    const data = await response.json();
    return { success: response.ok, data };
  } catch (error) {
    console.error('Error updating task:', error);
    return { success: false, error: 'Failed to update task' };
  }
};

// Delete a task
export const deleteTask = async (id: string): Promise<TaskResponse> => {
  try {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
      method: 'DELETE', 
    });
    const data = await response.json();
    return { success: response.ok, data };
  } catch (error) {
    console.error('Error deleting task:', error);
    return { success: false, error: 'Failed to delete task' };
  }
};