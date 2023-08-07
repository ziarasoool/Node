import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id: number): Task {
    return this.taskService.getTaskById(id);
  }

  @Post()
  createTask(@Body() task: Task): void {
    this.taskService.createTask(task);
  }

  @Put(':id')
  updateTask(@Param('id') id: number, @Body() updatedTask: Task): void {
    this.taskService.updateTask(id, updatedTask);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number): void {
    this.taskService.deleteTask(id);
  }
}
