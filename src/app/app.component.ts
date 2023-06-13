import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro-angular-idgs902';
    alumno={
      matricula:1234,
      nombre:'Mario',
      apePaterno:'Vargas',
      Inscrito:274.9,
      fechaNacimiento:new Date()
    };


  dupicaN(n:number):number{
    return n*2;
  }
}

 