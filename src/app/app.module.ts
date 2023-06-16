import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NameGrupos } from './utl/grupos.components';
import { Idgs902 } from './idgs902/idgs902.components';
import { IdgsComponent } from './utl/idgs/idgs.component';
import { IricComponent } from './utl/iric/iric.component';
import { FormsModule } from '@angular/forms';
import { SumaComponent } from './utl/formularios/suma/suma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasBasComponent } from './utl/formularios/operas-bas/operas-bas.component';
import { NgIf } from '@angular/common';
 

@NgModule({
  declarations: [
    AppComponent,
    NameGrupos,
    Idgs902,
    IdgsComponent,
    IricComponent,
    SumaComponent,
    OperasBasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
      NgIf,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
