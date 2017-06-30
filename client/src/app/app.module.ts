import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimepiecesComponent } from './timepieces/timepieces.component';

@NgModule({
  declarations: [
    AppComponent,
    TimepiecesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
