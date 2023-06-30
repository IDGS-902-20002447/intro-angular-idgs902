import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NameGrupos } from './utl/grupos.components';
import { Idgs902 } from './idgs902/idgs902.components';
import { IdgsComponent } from './utl/idgs/idgs.component';
import { IricComponent } from './utl/iric/iric.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SumaComponent } from './utl/formularios/suma/suma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './utl/menu/menu.component';
import { OperasModule } from './utl/formularios/operas/operas.module';
import { DistanciaModuleModule } from './distancia-module/distancia-module.module';
import { CalificacionAlumComponent } from './utl/calificacion-alum/calificacion-alum.component';
import { AlumnoFilterPipe } from './utl/alumno-filter.pipe';
import { AlumnosReactiveComponent } from './formularios/alumnos-reactive/alumnos-reactive.component';
import { AppRoutingModule } from './app-routing.module';



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
    AlumnoFilterPipe,
    AlumnosReactiveComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasModule,
    DistanciaModuleModule,
    ReactiveFormsModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
