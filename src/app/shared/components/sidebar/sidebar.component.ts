import { Component, OnInit } from '@angular/core';
import { slideInOut } from '../../../router.animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [slideInOut()]
})
export class SidebarComponent implements OnInit {
  public isCollapsed = true;
  // public collapsed() {
  //   return this.isCollapsed
  // }

  constructor() { }

  ngOnInit() {
  }

}
