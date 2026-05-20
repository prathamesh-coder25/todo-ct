import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodos } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() getTodos !: Array<Itodos>

  @Output() emitRemoveId:EventEmitter<Itodos>= new EventEmitter<Itodos>()
  constructor() { }

  ngOnInit(): void {
  }
  onRemove(id:Itodos){
console.log(id);

// this.emitRemoveId.emit(id)
   let getPassword=prompt("password")

    if(getPassword === '12345'){
          this.emitRemoveId.emit(id)


    }else{
      alert(' Enter your Invailid password  plz try again')
    }


  }

}
