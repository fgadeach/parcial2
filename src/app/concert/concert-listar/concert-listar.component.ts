import { Component, OnInit } from '@angular/core';
import { Concert } from '../concert';
import { ConcertService } from '../concert.service';

@Component({
  selector: 'app-concert-listar',
  templateUrl: './concert-listar.component.html',
  styleUrls: ['./concert-listar.component.css']
})
export class ConcertListarComponent implements OnInit {

  concerts: Array<Concert>;
  concertSeleccionado: Concert;
  selected=false;

  constructor(private concertService: ConcertService) { }

  ngOnInit() {
    this.getConcerts()
  }

  onSelected(p: Concert): void {
    this.selected = true;
    this.concertSeleccionado = p;
  }
  getConcerts(): void {
    this.concertService.getConcerts()
      .subscribe(concerts => {
        this.concerts = concerts;
      });
  }

}
