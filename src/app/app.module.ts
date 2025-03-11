import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BioComponent } from './bio/bio/bio.component';
import { PortafolioComponent } from './portafolio/portafolio/portafolio.component';


import { BlogComponent } from './blog/blog/blog.component';
import { ContactComponent } from './contact/contact/contact.component';
import { HeaderComponent } from './header/header/header.component';
import { RequestComponent } from './request/request/request.component';
import { FooterlComponent } from './footerl/footerl/footerl.component';
import { GaleriaComponent } from './galeria/galeria/galeria.component';

import { inject } from '@vercel/analytics';
import { Expo1Component } from './expo1/expo1/expo1.component';
import { Expo2Component } from './expo2/expo2/expo2.component';
import { Expo3Component } from './expo3/expo3/expo3.component';
import { Expo4Component } from './expo4/expo4/expo4.component';
inject();

@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    PortafolioComponent,
    BlogComponent,
    ContactComponent,
    HeaderComponent,
    RequestComponent,
    FooterlComponent,
    GaleriaComponent,
    Expo1Component,
    Expo2Component,
    Expo3Component,
    Expo4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
