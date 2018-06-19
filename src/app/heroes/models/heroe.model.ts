import { Observable } from 'rxjs';

export interface Heroe {
  id?: string;
  key$?: string;
  nombre: string;
  editorial: string;
  bio: string;
  img: string;
  aparicion: string;
  url?: string;
  imageURL?: Observable<string>;
}
