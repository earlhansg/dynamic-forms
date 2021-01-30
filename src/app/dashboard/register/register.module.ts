import { NgModule } from '@angular/core';

import { RegisterRoutingModule } from './register-routing.module';

import { SharedModule } from '../../shared/shared.module';

import { RegisterComponent } from './container/register.component';

@NgModule({
  imports: [
    RegisterRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [RegisterComponent],
  providers: [],
})
export class RegisterModule { }
