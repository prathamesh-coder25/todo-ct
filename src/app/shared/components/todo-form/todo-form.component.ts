import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Itodos } from '../../models/todo';
import { uuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit,OnChanges {
  isInEditMode : boolean =false
    @ViewChild ('todoItem') todoItem !: ElementRef
    @ViewChild ('isCompleted') isCompleted !: ElementRef
     @Output()emitUpdateTodo :EventEmitter<Itodos>= new EventEmitter<Itodos>()
    @Output()emitNewTodo :EventEmitter<Itodos>= new EventEmitter<Itodos>();


    @Input() Editobj!:Itodos
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
  }

   ngOnChanges(changes: SimpleChanges): void {
    if(changes['Editobj'].currentValue){
      this.isInEditMode=true;
      this.todoItem.nativeElement.value=this.Editobj.todoItem;
       this.isCompleted.nativeElement.value=this.Editobj.isCompleted;

    }
  }

  onUpdate(){
    let update_obj:Itodos={
       todoItem: this.todoItem.nativeElement.value,
     isCompleted: this.isCompleted.nativeElement.value =='true'? true:false,
     todoId:this.Editobj.todoId
    }
    this.isInEditMode=false;
    this.todoItem.nativeElement.value =''
    this.isCompleted.nativeElement.value ='true'
    this.emitUpdateTodo.emit(update_obj)
  }

}
