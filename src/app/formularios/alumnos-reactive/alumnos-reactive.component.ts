import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumnos-reactive',
  templateUrl: './alumnos-reactive.component.html',
  styleUrls: ['./alumnos-reactive.component.css']
})
export class AlumnosReactiveComponent {
 



  alumnosForm!:FormGroup;
  constructor(private readonly fb:FormBuilder){
    this.alumnosForm=this.initForm();
  }

  onSubmit():void{
    //console.log('Form->, ',this.alumnosForm.value);
    this.obtenerValor();
  }

  obtenerValor():void{
    const mat=this.alumnosForm.get('matricula')?.value;
    const nom=this.alumnosForm.get('nombre')?.value;
    console.log('Matricula: ',mat)
    console.log('Nombre: ',nom)

  }

  initForm():FormGroup{
    return this.fb.group({
      matricula:['',[Validators.required,Validators.minLength(3)]],
      nombre:['',[Validators.required]],
      edad:[''],
      correo:['',[Validators.required]],
      foto:[''],
      calif:['']
    })
  }
}
