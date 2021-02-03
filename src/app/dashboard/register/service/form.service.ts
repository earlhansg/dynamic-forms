import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';


// tslint:disable-next-line: class-name
export interface form {
  place?: string;
  language?: string;
  level: string;
  duration: string;
}

@Injectable({ providedIn: 'root' })
export class FormService {

  // tslint:disable-next-line: variable-name
  private readonly _educations = new BehaviorSubject<any[]>([]);
  readonly eductions$ = this._educations.asObservable();

  // tslint:disable-next-line: variable-name
  private readonly _languages = new BehaviorSubject<any[]>([]);
  readonly languages$ = this._languages.asObservable();

  editEducation = new BehaviorSubject<boolean>(false);
  editLanguage = new BehaviorSubject<boolean>(false);

  constructor() { }

  get educations(): form[] {
    return this._educations.getValue();
  }

  set educations(val: form[]) {
    this._educations.next(val);
  }

  get languages(): form[] {
    return this._languages.getValue();
  }

  set languages(val: form[]) {
    this._languages.next(val);
  }

  addEducation(formValue: form): void {
    this.educations = [
      ...this.educations,
      formValue
    ];
  }

  updateEducation(id: number, updatedValues: any): void {
    const education = this.educations.find((list, i) => i === id);
    if (education) {
      const index = this.educations.indexOf(education);
      this.educations[index] = {
        ...education,
        ...updatedValues
      };
      this.educations = [...this.educations];
    }
  }

  addLanguage(formValue: form): void {
    this.languages = [
      ...this.languages,
      formValue
    ];
  }

  updateLanguage(id: number, updatedValues: any): void {
    const language = this.languages.find((list, i) => i === id);
    if (language) {
      const index = this.languages.indexOf(language);
      this.languages[index] = {
        ...language,
        ...updatedValues
      };
      this.languages = [...this.languages];
    }
  }

  removeEducation(id: number): void {
    this.educations = this.educations.filter((data, i) => i !== id);
  }

  removeLanguage(id: number): void {
    this.languages = this.languages.filter((data, i) => i !== id);
  }

}
