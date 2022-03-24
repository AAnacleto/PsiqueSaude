import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarcarConsultasPageRoutingModule } from './marcar-consultas-routing.module';

import { MarcarConsultasPage } from './marcar-consultas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarcarConsultasPageRoutingModule
  ],
  declarations: [MarcarConsultasPage]
})
export class MarcarConsultasPageModule {}
