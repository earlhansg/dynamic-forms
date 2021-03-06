import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }