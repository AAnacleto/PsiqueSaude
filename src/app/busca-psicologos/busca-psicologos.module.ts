import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscaPsicologosPageRoutingModule } from './busca-psicologos-routing.module';

import { BuscaPsicologosPage } from './busca-psicologos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscaPsicologosPageRoutingModule
  ],
  declarations: [BuscaPsicologosPage]
})
export class BuscaPsicologosPageModule {}
