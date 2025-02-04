import { Task } from "@/types/task";
// Helper function to convert _id to id
export const convertId = (tasks: Task[]) => {
  return tasks.map(task => ({
      ...task,
      id: task._id ?? '', // Copy _id to id or use '' if _id is undefined
      _id: undefined, // Remove _id to avoid confusion
    }));
};