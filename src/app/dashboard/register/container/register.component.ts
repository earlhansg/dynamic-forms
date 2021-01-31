import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { FormComponent } from 'src/app/shared/components/form/form.component';
import { FormService } from '../service/form.service';
import { personalData, educations, languages } from '../data/register-form.data';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})

export class RegisterComponent implements OnInit, AfterViewInit {

  @ViewChild('personalForm') personalForm: FormComponent;

  educationFormValues$: Observable<any>;
  dataSource$: Observable<any>;

  personalData = personalData;
  educations = educations;
  languages = languages;


  constructor(public formService: FormService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    console.log(this.personalForm.form.valid);
  }

}
