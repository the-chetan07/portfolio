import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  animations: [routerTransition()]
})
export class ExperienceComponent implements OnInit {

  public experience: object = {
      title: 'Experience',
      workHistory: [
        {
          position: 'Solution Developer',
          company: 'B2X Service Solutions India Pvt. Ltd.',
          info: '',
          start: '2016-01-25T09:03:01+0900',
          end: '',
          present: true
        },
        {
          position: 'Associate Software Engineer',
          company: 'PlayerzPot Media Pvt. Ltd.',
          info: '',
          start: '2015-12-01T09:03:01+0900',
          end: '2016-01-23T09:03:01+0900',
          present: false
        },
        {
          position: 'Software Engineer',
          company: 'Codesphere Solutions',
          info: '',
          start: '2014-12-01T09:03:01+0900',
          end: '2015-11-30T09:03:01+0900',
          present: false
        }
      ]
  }

  constructor() { }

  ngOnInit() {
  }

}
