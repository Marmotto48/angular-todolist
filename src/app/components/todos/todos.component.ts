import { Component } from '@angular/core';
import { TodoModel } from '../../models/Todo';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  imports: [NgFor, FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  todos: TodoModel[] = [];
  inputTodo: string = '';

  constructor() {}
  ngOnInit(): void {
    this.todos = [
      {
        content: 'first todo',
        completed: true,
      },
      {
        content: 'second todo',
        completed: false,
      },
    ];
  }

  // method = function inside a class
  // method delete
  toggleDelete(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }
  // method add todo
  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });
    this.inputTodo = '';
  }
  // method complete
  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    });
  }
}
