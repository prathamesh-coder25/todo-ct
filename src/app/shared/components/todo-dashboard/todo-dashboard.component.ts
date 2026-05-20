import { Component, OnInit } from '@angular/core';
import { Itodos } from '../../models/todo';
import { snackBarService } from '../../services/mat.service';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
Editobj!:Itodos
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
 


  constructor(private _snackBar : snackBarService) { 

  }

  ngOnInit(): void {

  }

getNewTodo(todo : Itodos){
this.todosArr.push(todo)
 this._snackBar.openSnackBar(`The new Todo ${todo.todoItem} Added Successfully !!!!`)

}


getRemoveId(todo:Itodos){

  let getIndex=this.todosArr.findIndex(n => n.todoId === todo.todoId)
  this.todosArr.splice(getIndex,1)
  console.log(todo);
  
}


onEdit(todo:Itodos){
  this.Editobj=todo;
}


onUpdate(todo:Itodos){
  let getIndex=this.todosArr.findIndex(t=>t.todoId===todo.todoId);
  this.todosArr[getIndex]=todo;
  this._snackBar.openSnackBar(`the TodoItem is Updated Succesfully`);
}
}
