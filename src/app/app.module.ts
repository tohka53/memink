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
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
