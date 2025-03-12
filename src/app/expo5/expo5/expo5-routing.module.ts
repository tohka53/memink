import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Expo5Component } from './expo5.component';

const routes: Routes = [

  {
    path: '',
    component: Expo5Component  
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Expo5RoutingModule { }
