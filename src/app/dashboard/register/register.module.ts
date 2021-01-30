import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RegisterRoutingModule } from './register-routing.module';

import { SharedModule } from '../../shared/shared.module';

import { RegisterComponent } from './container/register.component';

@NgModule({
  imports: [
    RegisterRoutingModule,
    SharedModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [],
  declarations: [
    RegisterComponent
  ],
  providers: [],
})
export class RegisterModule { }
