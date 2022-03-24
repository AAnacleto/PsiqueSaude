import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarcarConsultasPage } from './marcar-consultas.page';

const routes: Routes = [
  {
    path: '',
    component: MarcarConsultasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarcarConsultasPageRoutingModule {}
