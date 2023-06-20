import { Component } from '@angular/core';

@Component({
  selector: 'app-opers-bas',
  templateUrl: './opers-bas.component.html',
  styleUrls: ['./opers-bas.component.css']
})
export class OpersBasComponent {
  num1!:number;
  num2!:number;
  resultado!:number;

  operacioneSeleccionada:string='suma';
  tipoOperaciones=[
    'suma',
    'resta',
    'multiplicacion',
    'division'
  ];

  calcular(){
    switch(this.operacioneSeleccionada){
      case 'suma': this.resultado=this.num1+this.num2;
                   break;
      case 'resta': this.resultado=this.num1-this.num2;
                   break;
      case 'multiplicacion': this.resultado=this.num1*this.num2;
                   break;
      case 'division': this.resultado=this.num1/this.num2;
                   break;

    }
  }



}
