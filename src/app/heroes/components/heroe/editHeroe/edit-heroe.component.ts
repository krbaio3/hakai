import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-heroe',
  templateUrl: './edit-heroe.component.html',
  styleUrls: ['./edit-heroe.component.scss'],
})
export class EditHeroeComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    this.route.parent.params.subscribe((params) => {
      console.log(`entra en editar con parametros: ${params}`);
    });
  }

  ngOnInit() {}
  onSubmit() {}
}
