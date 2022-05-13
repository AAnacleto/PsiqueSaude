import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendarConsultasPageRoutingModule } from './agendar-consultas-routing.module';

import { AgendarConsultasPage } from './agendar-consultas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendarConsultasPageRoutingModule
  ],
  declarations: [AgendarConsultasPage]
})
export class AgendarConsultasPageModule {}
