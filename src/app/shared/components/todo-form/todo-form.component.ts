import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Itodos } from '../../models/todo';
import { uuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  isInEditMode : boolean =false
    @ViewChild ('todoItem') todoItem !: ElementRef
    @ViewChild ('isCompleted') isCompleted !: ElementRef
    @Output()emitNewTodo :EventEmitter<Itodos>= new EventEmitter<Itodos>()
  constructor(private _uuidservice : uuidService) { }

  ngOnInit(): void {
  }
  
onTodoAdd(){
  let todo : Itodos ={
    todoItem: this.todoItem.nativeElement.value,
     isCompleted: this.isCompleted.nativeElement.value =='true'? true:false,
      todoId: this._uuidservice.uuid()

  }
  
    this.todoItem.nativeElement.value =''
    this.isCompleted.nativeElement.value ='true'
    this.emitNewTodo.emit(todo)
    console.log(todo)
  }

}
