import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './container/dashboard.component';

@NgModule({
  imports: [
    DashboardRoutingModule,
    SharedModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [],
  declarations: [DashboardComponent],
  providers: [],
})
export class DashboardModule { }
