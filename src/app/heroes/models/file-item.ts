export class FileItem {

  key: string;
  nombreImagen: string;
  url: string;
  imagen: File;


  constructor (file: File) {
    this.imagen = file;
    this.nombreImagen = file.name;
  }

}
