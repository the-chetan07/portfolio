import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css'],
  animations: [routerTransition()]
})
export class InterestsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
