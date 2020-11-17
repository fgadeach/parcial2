import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ConcertModule } from './concert/concert.module';
import { PatrocinadoresModule } from './patrocinadores/patrocinadores.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConcertModule,
    PatrocinadoresModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule { }
