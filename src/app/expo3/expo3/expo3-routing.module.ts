import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Expo3Component } from './expo3.component';

const routes: Routes = [

  {
    path: '',
    component: Expo3Component  
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Expo3RoutingModule { }
