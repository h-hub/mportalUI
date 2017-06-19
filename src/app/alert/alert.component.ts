/**
 * Created by bjayamanna on 6/16/2017.
 */
import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';

import { AlertService } from '../services/alert.service';
import { DialogOverviewExampleDialog } from './dialog-overview-example-dialog.component';

@Component({
  moduleId: module.id
})

export class AlertComponent {
  message: any;

  constructor(
    private alertService: AlertService,
    public dialog: MdDialog
  ) { }

  ngOnInit() {
    this.alertService.getMessage().subscribe(message => {
      if(this.message) this.dialog.open(DialogOverviewExampleDialog);
    });
  }

}


