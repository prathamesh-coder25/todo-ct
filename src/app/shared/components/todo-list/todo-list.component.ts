import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodos } from '../../models/todo';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmationComponent } from '../get-confirmation/get-confirmation.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() getTodos !: Array<Itodos>

  @Output() emitRemoveId:EventEmitter<string>= new EventEmitter<string>()
  constructor(private _matDialog:MatDialog) { }

  ngOnInit(): void {
  }
  
  onRemove(id:string){
    let config=new MatDialogConfig();
    config.width='400px';
    config.disableClose=true;
    config.data=`are You sure U want to remove it with id ${id}`
    let getconfirm=  this._matDialog.open(GetConfirmationComponent,config);
    getconfirm.afterClosed().subscribe(confirm=>{
      if(confirm){
        this.emitRemoveId.emit(id)
      }
    })

  }

}
