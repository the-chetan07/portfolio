import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  animations: [routerTransition()]
})
export class EducationComponent implements OnInit {

  public education: object = {
    title: 'Education',
    eduHistory: [
      {
        institute: 'Mumbai University',
        degree: 'Bachelor Of Engineering',
        stream: 'Information Technology',
        percentage: '65.66%',
        start: '2009-08-17T00:00:00+0530',
        end: '2014-05-31T00:00:00+0530'
      },
      {
        institute: 'Birla College Of Arts, Science & Commerce',
        degree: 'HSC (Maharashtra Board)',
        stream: 'Science',
        percentage: '67.83%',
        start: '2007-07-01T00:00:00+0530',
        end: '2009-02-21T00:00:00+0530'
      },
      {
        institute: 'C.R.M. Oak High School',
        degree: 'SSC (Maharashtra Board)',
        stream: '',
        percentage: '85.23%',
        start: '2006-06-13T00:00:00+0530',
        end: '2007-03-29T00:00:00+0530'
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
