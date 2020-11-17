import { Component, OnInit } from '@angular/core';
import { Patrocinador } from '../patrocinadores';
import { PatrocinadorService } from '../patrocinadores.service';

@Component({
  selector: 'app-patrocinadores-listar',
  templateUrl: './patrocinadores-listar.component.html',
  styleUrls: ['./patrocinadores-listar.component.css']
})
export class PatrocinadoresListarComponent implements OnInit {

  patrocinadores: Array<Patrocinador>;
  patrocinadorSeleccionado: Patrocinador;
  selected=false;

  constructor(private patrocinadorService: PatrocinadorService) { }

  ngOnInit() {
    this.getPatrocinadores()
  }

  onSelected(p: Patrocinador): void {
    this.selected = true;
    this.patrocinadorSeleccionado = p;
  }
  getPatrocinadores(): void {
    this.patrocinadorService.getPatrocinadores()
      .subscribe(patrocinadores => {
        this.patrocinadores = patrocinadores;
      });
  }

}
