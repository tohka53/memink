import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Expo1Component } from './expo1.component';

const routes: Routes = [

  {
    path: '',
    component: Expo1Component  
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Expo1RoutingModule { }
