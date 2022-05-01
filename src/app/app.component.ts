import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { setTimeout } from 'timers';
//import { setInterval } from 'timers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(public router: Router){}
}
