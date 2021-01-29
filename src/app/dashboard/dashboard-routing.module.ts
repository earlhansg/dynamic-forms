import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './container/dashboard.component';

const routes: Routes = [
  {
    path: 'main',
    component: DashboardComponent,
    children: [
      // {
      //   path: 'test',
      //   loadChildren: () => import('./test/test.module')
      //   .then(mod => mod.TestModule)
      // }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }