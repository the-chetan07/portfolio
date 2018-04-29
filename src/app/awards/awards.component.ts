import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css'],
  animations: [routerTransition()]
})
export class AwardsComponent implements OnInit {
  public awards = {
    title: 'Awards & Certifications',
    data: [
      { name: 'Start Contributor 2017 For Microsoft Project', from: 'B2X Service Solutions India Pvt. Ltd.' },
      { name: 'Promising New Talent Of The Year 2016-2017', from: 'B2X Service Solutions India Pvt. Ltd.' },
      { name: 'Participated In Code Gladiators 2017, Appeared In Final Round At Banglore.' }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
