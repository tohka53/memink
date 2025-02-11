import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'bio',
    loadChildren: () => import('./bio/bio/bio.module').then(m => m.BioModule)
  },  
  {
    path: 'request',
    loadChildren: () => import('./request/request/request.module').then(m => m.RequestModule)
  },  
  {
    path: 'galeria',
    loadChildren: () => import('./galeria/galeria/galeria.module').then(m => m.GaleriaModule)
  },  
  {
    
    path: '',
    redirectTo: 'bio',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
