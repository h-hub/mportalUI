/**
 * Created by bjayamanna on 6/19/2017.
 */
import { Observable } from 'rxjs/Rx';
import { AlertDialog } from '../alert/alert-dialog.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class DialogService {

  constructor(private dialog: MdDialog) { }

  public confirm(title: string, message: string): Observable<boolean> {

    let dialogRef: MdDialogRef<AlertDialog>;

    dialogRef = this.dialog.open(AlertDialog);
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed();
  }
}
