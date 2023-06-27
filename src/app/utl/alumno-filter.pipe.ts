import { Pipe, PipeTransform } from '@angular/core';
import { AlumnosIri } from './alumnos-iri';

@Pipe({
  name: 'alumnoFilter'
})
export class AlumnoFilterPipe implements PipeTransform {

  transform(value: AlumnosIri[],args: string): AlumnosIri[] {
    let filter:string=args ?args.toLocaleLowerCase():'';

    return filter? value.filter((alumno:AlumnosIri)=>
    alumno.nombre.toLocaleLowerCase().indexOf(filter)!=-1)
    :value;
  }

}
