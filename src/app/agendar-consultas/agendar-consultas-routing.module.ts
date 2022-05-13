import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendarConsultasPage } from './agendar-consultas.page';

const routes: Routes = [
  {
    path: '',
    component: AgendarConsultasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendarConsultasPageRoutingModule {}
