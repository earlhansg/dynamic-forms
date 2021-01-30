import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularMaterialModule } from '../angular-material.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


export const modules = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
  LayoutModule,
  FlexLayoutModule,
  AngularMaterialModule,
  FontAwesomeModule
];
