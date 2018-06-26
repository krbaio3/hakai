import {
  Directive,
  EventEmitter,
  ElementRef,
  HostListener,
  Input,
  Output
} from '@angular/core';
import { FileItem } from '../models/file-item';

@Directive({
  selector: '[appNgDropfiles]'
})
export class NgDropfilesDirective {
  @Input() archivos: FileItem[] = [];
  @Output() mouseOver: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  @HostListener('dragover', ['$event'])
  public onDragEnter(event: any) {
    this.mouseOver.emit(true);
    this._previnirDetener(event);
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(event: any) {
    this.mouseOver.emit(false);
  }

  @HostListener('drop', ['$event'])
  public onDrop(event: any) {
    const transferencia = this._getTransferencia(event);

    if (!transferencia) {
      return;
    }
    this._extraerArchivos(transferencia.files);

    this._previnirDetener(event);
    this.mouseOver.emit(false);
  }

  private _getTransferencia(event: any) {
    return event.dataTransfer
      ? event.dataTransfer
      : event.originalEvent.dataTransfer;
  }

  private _extraerArchivos(fileList: FileList) {
    console.log(fileList);

    // tslint:disable-next-line:forin
    for (const propiedad in Object.getOwnPropertyNames(fileList)) {
      const archivoTemporal = fileList[propiedad];
      if (this._archivoPuedeCargarse(archivoTemporal)) {
        const nuevoArchivo = new FileItem(archivoTemporal);
        this.archivos.push(nuevoArchivo);
      }
    }

    console.log(this.archivos);
  }

  // validaciones

  private _archivoPuedeCargarse(file: File): boolean {
    if (!this._archivoYaupdate(file.name) && this._esImagen(file.type)) {
      return true;
    } else {
      return false;
    }
  }

  private _previnirDetener(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  private _archivoYaupdate(nameFile: string): boolean {
    for (const archivo of this.archivos) {
      if (archivo.nombreImagen === nameFile) {
        console.log(`el archivo ${nameFile} ya ha sido agregado`);
        return true;
      }
    }
    return false;
  }

  private _esImagen(tipoFile: string): boolean {
    return tipoFile === '' || tipoFile === undefined
      ? false
      : tipoFile.startsWith('image');
  }
}
