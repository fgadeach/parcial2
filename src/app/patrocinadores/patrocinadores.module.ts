import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatrocinadoresListarComponent } from './patrocinadores-listar/patrocinadores-listar.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PatrocinadoresListarComponent],
  exports: [PatrocinadoresListarComponent],
})
export class PatrocinadoresModule { }
