import {
  Component, ChangeDetectionStrategy, Input,
  OnChanges, Output, EventEmitter
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormService } from 'src/app/dashboard/register/service/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnChanges {

  @Input()
  props: any;

  @Output()
  submitted = new EventEmitter();

  @Output()
  returned = new EventEmitter();

  form: FormGroup;
  formProps: any = [];


  constructor(private formService: FormService) { }

  ngOnChanges(): void {
    const formDataObj: any = {};
    for (const prop of Object.keys(this.props)) {
      formDataObj[prop] = new FormControl(this.props[prop].value);
      this.formProps.push({
        key: prop,
        label: this.props[prop].label,
        type: this.props[prop].type,
        className: this.props[prop].className,
        placeholder: this.props[prop].placeholder || '',
        options: this.props[prop].options || [],
      });
    }
    this.form = new FormGroup(formDataObj);
  }

  submit(): void {
    if (this.form.valid) {
      this.formService.addEducation(this.form.value);
    }
  }

}
