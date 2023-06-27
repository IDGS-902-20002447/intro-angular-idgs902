import { Component } from '@angular/core';
import { AlumnosIri } from '../alumnos-iri';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css'] 
})
export class IricComponent {
//Binding propierties: Enlace de propiedades
  imageWidth:number=50; 
  imageMargin:number=2;

//Event Propierty
  muestraImg:boolean=true;

  alumnoTitle!:string;

  listFilter:string='';

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }


  alumnoIric:AlumnosIri[]=[
    {
      matricula:1234,
      nombre:'Mario',
      edad:12,
      correo:'Mario@gmail.com',
      foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLyjw2LWy1igUvzgswqjZONZu4Snzlu4kAxBHVsmtJjA&s',
      calif:1.7
    },
    {
      matricula:5678,
      nombre:'German',
      edad:22,
      correo:'German@gmail.com',
      foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLyjw2LWy1igUvzgswqjZONZu4Snzlu4kAxBHVsmtJjA&s',
      calif:10
    },
    {
      matricula:9231,
      nombre:'Chia',
      edad:26,
      correo:'Chia@gmail.com',
      foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLyjw2LWy1igUvzgswqjZONZu4Snzlu4kAxBHVsmtJjA&s',
      calif:5.7
    },
    {
      matricula:8323,
      nombre:'Yahir',
      edad:12,
      correo:'Yahir@gmail.com',
      foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLyjw2LWy1igUvzgswqjZONZu4Snzlu4kAxBHVsmtJjA&s',
      calif:2.7
    },
  ]

  onCalificaClick(message:string){
    this.alumnoTitle=`${message}`;
  }

}
