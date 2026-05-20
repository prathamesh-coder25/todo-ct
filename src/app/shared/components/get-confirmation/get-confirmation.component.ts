import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-confirmation',
  templateUrl: './get-confirmation.component.html',
  styleUrls: ['./get-confirmation.component.scss']
})
export class GetConfirmationComponent implements OnInit {
getmsg!:string
  constructor(private _MatDilogRef:MatDialogRef<GetConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA)msg:string
  ) { 

    this.getmsg=msg;
  }

  ngOnInit(): void {
  }
  onclick(flag:boolean){
   this._MatDilogRef.close(flag)
  }

}
