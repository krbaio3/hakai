import { Observable } from 'rxjs';

export interface Heroe {
  aparicion: string;
  bio: string;
  editorial: string;
  nombre: string;
  img: string;
  imgURL?: Observable<string>;
  key$?: string;
  id?: string;
}
