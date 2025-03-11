import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Expo4Component } from './expo4.component';

const routes: Routes = [

  {
    path: '',
    component: Expo4Component  
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Expo4RoutingModule { }
