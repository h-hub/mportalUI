/**
 * Created by bjayamanna on 6/19/2017.
 */
import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
  selector: 'alert-dialog',
  templateUrl: 'alert-dialog.component.html'
})
export class AlertDialog {

  public title: string;
  public message: string;

  constructor(public dialogRef: MdDialogRef<AlertDialog>) {

  }
}
