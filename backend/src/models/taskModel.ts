import { Schema, model, Document } from 'mongoose';

// Define the Task interface
interface ITask extends Document {
  name: string;
  description: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'To Do' | 'In Progress' | 'Completed';
  createdAt: Date;
  updatedAt: Date;
}

// Define the Task schema
const taskSchema = new Schema<ITask>(
    {
      name: { type: String, required: true },
      description: { type: String, required: true },
      priority: { type: String, enum: ['Low', 'Medium', 'High'], required: true },
      status: { type: String, enum: ['To Do', 'In Progress', 'Completed'], required: true },
    },
    { timestamps: true, collection: 'tasks' } // Automatically add createdAt and updatedAt fields
  );

  // Create and export the Task model
const Task = model<ITask>('Task', taskSchema);
export default Task;