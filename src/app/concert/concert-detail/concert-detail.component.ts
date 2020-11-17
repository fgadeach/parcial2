import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Concert } from '../concert';

@Component({
  selector: 'app-concert-detail',
  templateUrl: './concert-detail.component.html',
  styleUrls: ['./concert-detail.component.css']
})
export class ConcertDetailComponent implements OnInit {
  @Input() concertDetail: Concert;
  constructor() { }

  ngOnInit() {
  }

}
