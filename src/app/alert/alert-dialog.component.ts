/**
 * Created by bjayamanna on 6/19/2017.
 */
import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
  selector: 'alert-dialog',
  template: `
    <p>{{ title }}</p>
    <p>{{ message }}</p>
    <button type="button" md-raised-button
            (click)="dialogRef.close(true)">OK</button>
    <button type="button" md-button
            (click)="dialogRef.close()">Cancel</button>
  `,
})
export class AlertDialog {

  public title: string;
  public message: string;

  constructor(public dialogRef: MdDialogRef<AlertDialog>) {

  }
}
