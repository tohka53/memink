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
    path: 'expo',
    loadChildren: () => import('./blog/blog/blog.module').then(m => m.BlogModule)
  },  
  {
    path: 'expo1',
    loadChildren: () => import('./expo1/expo1/expo1.module').then(m => m.Expo1Module)
  },  
  {
    path: 'expo2',
    loadChildren: () => import('./expo2/expo2/expo2.module').then(m => m.Expo2Module)
  },  
  {
    path: 'expo3',
    loadChildren: () => import('./expo3/expo3/expo3.module').then(m => m.Expo3Module)
  },  
  {
    path: 'expo4',
    loadChildren: () => import('./expo4/expo4/expo4.module').then(m => m.Expo4Module)
  },  
  {
    path: 'expo5',
    loadChildren: () => import('./expo5/expo5/expo5.module').then(m => m.Expo5Module)
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
