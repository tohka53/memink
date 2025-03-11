import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Expo2Component } from './expo2.component';

const routes: Routes = [
  

  {
    path: '',
    component: Expo2Component  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Expo2RoutingModule { }
