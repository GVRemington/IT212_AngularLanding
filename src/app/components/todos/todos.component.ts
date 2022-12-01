import { Component } from '@angular/core';
import { ToDo } from 'src/app/models/ToDo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent  {

 todos: ToDo[] = [];

 inputTodo:string = "";

  constructor(){}

  ngOnInit(): void{
    this.todos = [
      {
        content: 'First ToDo',
        completed: false
      },
      {
        content: 'Second ToDo',
        completed: false
      }
    ]
  }

  toggleDone(id: number) {  
      this.todos.map(( v, i) => {
        if (i == id) v.completed = !v.completed;

        return v;
      })
  }

  deleteTodo(id: number)  {
    this.todos = this.todos.filter(( v , i) => i != id); 
  }

  addTodo () {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = "";
  }

}
