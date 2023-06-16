import { Component } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent {
  numero1:string='';
  numero2:string='';
  resultado:number=0;

  sumar():void{
    this.resultado=parseInt (this.numero1)+parseInt(this.numero2)
  }

}
