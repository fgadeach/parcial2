import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatrocinadoresListarComponent } from './patrocinadores-listar/patrocinadores-listar.component';
import { PatrocinadoresDetailComponent } from './patrocinadores-detail/patrocinadores-detail.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PatrocinadoresListarComponent,PatrocinadoresDetailComponent ],
  exports: [PatrocinadoresListarComponent],
})
export class PatrocinadoresModule { }
