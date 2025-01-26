import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  imports: [FormsModule, CommonModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
  newTask: string = '';
  tasks: { id: number; text: string; completed: boolean }[] = [];
  nextId: number = 1;
  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({
        id: this.nextId++,
        text: this.newTask.trim(),
        completed: false,
      });
      this.newTask = '';
    }
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  toggleCompleted(taskId: number) {
    const task = this.tasks.find((task) => task.id === taskId);
    if (task) {
      task.completed = !task.completed;
    }
  }
}

