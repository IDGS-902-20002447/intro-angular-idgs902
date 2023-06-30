import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosReactiveComponent } from './formularios/alumnos-reactive/alumnos-reactive.component';
import { IricComponent } from './utl/iric/iric.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},//
  {path:'AltaAlumnos',component:AlumnosReactiveComponent},
  {path:'IRIC',component:IricComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
