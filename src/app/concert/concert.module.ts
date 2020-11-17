import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcertListarComponent } from './concert-listar/concert-listar.component';
import { ConcertDetailComponent } from "./concert-detail/concert-detail.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConcertListarComponent,ConcertDetailComponent],
  exports: [ConcertListarComponent],
})
export class ConcertModule { }
