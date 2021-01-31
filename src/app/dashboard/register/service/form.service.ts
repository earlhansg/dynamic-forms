import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';


// tslint:disable-next-line: class-name
interface form {
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

  addLanguage(formValue: form): void {
    this.educations = [
      ...this.languages,
      formValue
    ];
  }

  removeEducation(id: number): void {
    this.educations = this.educations.filter((data, i) => i !== id);
  }

  removeLanguage(id: number): void {
    this.languages = this.languages.filter((data, i) => i !== id);
  }

}
