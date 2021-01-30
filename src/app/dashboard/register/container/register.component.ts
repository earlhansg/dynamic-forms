import { Component, OnInit } from '@angular/core';

import { personalData, educations, languages } from '../data/register-form.data';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})

export class RegisterComponent implements OnInit {

  personalData = personalData;
  educations = educations;
  languages = languages;


  constructor() { }

  ngOnInit(): void { }
}
