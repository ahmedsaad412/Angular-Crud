import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  title: string = 'To Do List Control';
  imgSrc: string =
    'https://w7.pngwing.com/pngs/268/27/png-transparent-action-item-computer-icons-task-others-miscellaneous-angle-text-thumbnail.png';
  newTask: string = '';
  Tasks: string[] = [];
  isActive: boolean = false;
  AddTask() {
    if (this.newTask !== '') {
      this.Tasks.push(this.newTask);
      console.log(this.newTask);
      this.newTask = '';
      this.isActive = true;
    }
    console.log(this.Tasks);
  }
  DeleteTask(index: number) {
    this.Tasks.splice(index, 1);
    this.isActive = this.Tasks.length > 0;
  }
  EditTask(index: number): string | void {
    let updatedTask = prompt('Edit Task', this.Tasks[index]);
    if (updatedTask !== null) {
      updatedTask = updatedTask.trim();
      if (updatedTask !== '') {
        this.Tasks[index] = updatedTask;
        return updatedTask;
      }
    }
  }
}
