import { TaskList } from '@/components/tasks/task-list';
import { TaskForm } from '@/components/tasks/task-form';
import { useState,useEffect } from 'react';
import { PlusCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Task } from '@/types/task';
import { createTask, fetchTasks, updateTask, deleteTask } from '@/lib/request';
import { convertId } from '@/lib/helper';

export function DashboardPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editTask, setEditTask] = useState<Task | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();


  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    setIsLoading(true);
    try {
      const response = await fetchTasks();
      if (response.success && Array.isArray(response.data)) {
        const convertedTasks = convertId(response.data);
        setTasks(convertedTasks);
      } else {
        setTasks([]);
        toast({
          title: "Error",
          description: response.error || "Failed to load tasks",
          variant: "destructive",
        });
      }
    } catch (error) {
      setTasks([]);
      toast({
        title: "Error",
        description: "Failed to load tasks",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
 

  const handleCreateTask = async (data: Omit<Task, 'id' | 'created_at' | 'updated_at'>) => {
    const response = await createTask(data);
    if (response.success) {
      loadTasks();
      setIsFormOpen(false);
      toast({
        title: "Success",
        description: "Task created successfully",
      });
    } else {
      toast({
        title: "Error",
        description: response.error || "Failed to create task",
        variant: "destructive",
      });
    }
  };

  const handleUpdateTask = async (data: Omit<Task, 'id' | 'created_at' | 'updated_at'>) => {
    if (!editTask) return;
    const response = await updateTask(editTask.id, data);
    if (response.success) {
      loadTasks();
      setEditTask(null);
      setIsFormOpen(false);
      toast({
        title: "Success",
        description: "Task updated successfully",
      });
    } else {
      toast({
        title: "Error",
        description: response.error || "Failed to update task",
        variant: "destructive",
      });
    }
  };

  const handleDeleteTask = async (id: string) => {
    const response = await deleteTask(id);
    if (response.success) {
      setTasks(tasks.filter((task) => task.id !== id));
      toast({
        title: "Success",
        description: "Task deleted successfully",
      });
    } else {
      toast({
        title: "Error",
        description: response.error || "Failed to delete task",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6" />
              <h1 className="text-xl font-semibold">Task Manager</h1>
            </div>
            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
              <DialogTrigger asChild>
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Task
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>{editTask ? 'Edit Task' : 'Create New Task'}</DialogTitle>
                  <DialogDescription>
                    {editTask
                      ? 'Update the details of your existing task.'
                      : 'Add a new task to your list.'}
                  </DialogDescription>
                </DialogHeader>
                <TaskForm
                  task={editTask || undefined}
                  onSubmit={editTask ? handleUpdateTask : handleCreateTask}
                  onCancel={() => {
                    setIsFormOpen(false);
                    setEditTask(null);
                  }}
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <TaskList
            tasks={tasks}
            onEdit={(task) => {
              setEditTask(task);
              setIsFormOpen(true);
            }}
            onDelete={handleDeleteTask}
          />
        )}
      </main>
    </div>
  );
}