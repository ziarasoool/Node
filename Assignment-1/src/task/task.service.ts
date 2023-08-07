import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
    private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: number): Task {
    return this.tasks.find(task => task.id === id);
  }

  createTask(task: Task): void {
    this.tasks.push(task);
  }

  updateTask(id: number, updatedTask: Task): void {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      this.tasks[index] = { ...this.tasks[index], ...updatedTask };
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
