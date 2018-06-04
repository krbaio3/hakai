import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file-item';
import { CargaImagenesService } from '../../service/carga-imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.scss']
})
export class CargaComponent implements OnInit {
  archivos: FileItem[] = [];
  overDrop: boolean = false;

  constructor(public cargaImagenesSrv: CargaImagenesService) {}

  ngOnInit() {}

  loadImages() {
    this.cargaImagenesSrv.loadImagenesFirebase(this.archivos);
  }

  pruebaSobreElemento(event) {
    console.log(event);
  }
  cleanFiles() {
    console.log('limpiar Archivos');
    this.archivos = [];
  }
}
