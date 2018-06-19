export class FileItem {

  public imagen: File;
  public nombreImagen: string;
  public url: string;
  public estaSubiendo: boolean;
  public progreso: number;
  public key: string;


  constructor (imagen: File) {
    this.imagen = imagen;
    this.nombreImagen = imagen.name;

    this.estaSubiendo = false;
    this.progreso = 0;
  }

}
