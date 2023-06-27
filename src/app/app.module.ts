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
import { MenuComponent } from './utl/menu/menu.component';
import { OperasModule } from './utl/formularios/operas/operas.module';
import { DistanciaModuleModule } from './distancia-module/distancia-module.module';
import { CalificacionAlumComponent } from './utl/calificacion-alum/calificacion-alum.component';
import { AlumnoFilterComponent } from './utl/alumno-filter/alumno-filter.component';
import { AlumnoFilterPipe } from './utl/alumno-filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NameGrupos,
    Idgs902,
    IdgsComponent,
    IricComponent,
    SumaComponent,
    MenuComponent,
    CalificacionAlumComponent,
    AlumnoFilterComponent,
    AlumnoFilterPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasModule,
    DistanciaModuleModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
