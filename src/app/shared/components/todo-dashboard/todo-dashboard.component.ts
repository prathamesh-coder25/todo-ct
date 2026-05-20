import { Component, OnInit } from '@angular/core';
import { Itodos } from '../../models/todo';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {

  todosArr = [
    {
      todoItem: 'Azure',
      todoId: '123',
      isCompleted: true
    },
     {
      todoItem: 'Java',
      todoId: '124',
      isCompleted: false
    },
     {
      todoItem: 'DotNet',
      todoId: '125',
      isCompleted: true
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }



getRemoveId(todo:Itodos){

  let getIndex=this.todosArr.findIndex(n => n.todoId === todo.todoId)
  this.todosArr.splice(getIndex,1)
  console.log(todo);
  
}

}
