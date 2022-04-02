import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscaPsicologosPage } from './busca-psicologos.page';

const routes: Routes = [
  {
    path: '',
    component: BuscaPsicologosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscaPsicologosPageRoutingModule {}
