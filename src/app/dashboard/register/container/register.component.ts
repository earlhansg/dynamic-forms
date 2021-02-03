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
  listEducation: any;
  educationId: number;
  listLanguage: any;
  languageId: number;


  constructor(public formService: FormService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    console.log(this.personalForm.form.valid);
  }

  onUpdate(value: any, type: string): void {
    if (type === 'education') {
      this.formService.editEducation.next(true);
      this.educationId = value.id;
      delete value.id;
      this.listEducation = value;
    } else {
      this.formService.editLanguage.next(true);
      this.languageId = value.id;
      delete value.id;
      this.listLanguage = value;
    }
    // this.idToBeUpdated = value.id;
    // delete value.id;
    // this.toBeUpdated = value;
  }

  // update(type: string): void {
  //   if (type === 'educations') {
  //     console.log('updated', this.toBeUpdated);
  //     this.formService.updateEducation(this.idToBeUpdated, this.toBeUpdated);
  //     this.toBeUpdated = {};
  //   }
  //   // else { this.formService.removeLanguage(id); }
  // }

  onRemove(id: number, type: string): void {
    if (type === 'education') {
      this.formService.removeEducation(id);
    } else { this.formService.removeLanguage(id); }
  }

}
