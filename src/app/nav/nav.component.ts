/**
 * Created by bjayamanna on 6/29/2017.
 */
import { Component, OnInit } from '@angular/core';

import { SessionService } from '../services/services';

@Component({
  moduleId: module.id,
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['/nav.component.css']
})

export class NavComponent implements OnInit{

  username: String;
  role: String;

  constructor(
    private sessionService: SessionService) { }

  ngOnInit() {
    if (!this.sessionService.getUser()) return;
    this.username = JSON.parse(this.sessionService.getUser()).name;
    this.role = JSON.parse(this.sessionService.getUser()).role;
  }
}
