export type Priority = 'Low' | 'Medium' | 'High';
export type Status = 'To Do' | 'In Progress' | 'Completed';

export interface Task {
  id: string;
  _id?: string;
  name: string;
  description: string;
  priority: Priority;
  status: Status;
  created_at: string;
  updated_at: string;
}

export const PRIORITIES: Priority[] = ['Low', 'Medium', 'High'];
export const STATUSES: Status[] = ['To Do', 'In Progress', 'Completed'];