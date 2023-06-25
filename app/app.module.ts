import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';


import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { DescrizioneComponent } from './components/descrizione/descrizione.component';
import { OrariNegozioComponent } from './components/orari-negozio/orari-negozio.component';
import { RiepilogoordineComponent } from './components/riepilogoordine/riepilogoordine.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    DescrizioneComponent,
    OrariNegozioComponent,
    RiepilogoordineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
