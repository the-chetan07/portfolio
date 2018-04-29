import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [routerTransition()]
})
export class AboutComponent implements OnInit {
  public personalInfo: object = {
    firstName: 'Chetan',
    lastName: 'Patil',
    address: 'Kalyan (W), Pin: 421301, Maharashtra, India.',
    email: 'chetan0779@gmail.com',
    about: 'Software Developer, experience in AngularJs 1.x, Node.Js, Express, PostgreSQL. Passionate about my work, programming.',
    fb: 'https://www.facebook.com/CHETAN07J',
    twitter: 'https://twitter.com/Chetan07j',
    linkedin: 'https://www.linkedin.com/in/chetanppatil/',
    github: 'https://github.com/Chetan07j'
  }

  constructor() { }
  ngOnInit() {
  }

}
