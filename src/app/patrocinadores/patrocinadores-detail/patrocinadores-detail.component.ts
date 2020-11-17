import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Patrocinador } from '../patrocinadores';

@Component({
  selector: 'app-patrocinadores-detail',
  templateUrl: './patrocinadores-detail.component.html',
  styleUrls: ['./patrocinadores-detail.component.css']
})
export class PatrocinadoresDetailComponent implements OnInit {
  @Input() patrocinadorDetail: Patrocinador;
  constructor() { }
  ngOnInit() {
  }

}
