import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscaConsultasPageRoutingModule } from './busca-consultas-routing.module';

import { BuscaConsultasPage } from './busca-consultas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscaConsultasPageRoutingModule
  ],
  declarations: [BuscaConsultasPage]
})
export class BuscaConsultasPageModule {}
