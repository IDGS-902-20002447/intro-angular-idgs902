import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameGrupos } from './utl/grupos.components';
import { Idgs902 } from './idgs902/idgs902.components';
import { IdgsComponent } from './utl/idgs/idgs.component';

@NgModule({
  declarations: [
    AppComponent,
    NameGrupos,
    Idgs902,
    IdgsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
