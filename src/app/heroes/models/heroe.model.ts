import { Observable } from 'rxjs';

export interface Heroe {
  // Keys o id para identificar el heroe
  id?: string;
  key$?: string;
  // nombre del heroe en la plantilla
  nombre: string;
  // editorial a la que pertenece
  editorial: string;
  // biografía
  bio: string;
  // nombre de la imagen del heroe
  img: string;
  // fecha de aparición
  aparicion: string;
  // url de la imagen en firebase. DEPRECAR
  url?: string;
  // url de la imagen en firebase
  imgURL?: Observable<string>;
}
