import { RegistroComponent } from './login/registro/registro.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'folder/Inbox',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login/registro',
    component: RegistroComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home/:nome',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'marcar-consultas',
    loadChildren: () => import('./marcar-consultas/marcar-consultas.module').then( m => m.MarcarConsultasPageModule)
  },
  {
    path: 'consultas-agendadas',
    loadChildren: () => import('./consultas-agendadas/consultas-agendadas.module').then( m => m.ConsultasAgendadasPageModule)
  },
  {
    path: 'busca-consultas/:nome',
    loadChildren: () => import('./busca-consultas/busca-consultas.module').then( m => m.BuscaConsultasPageModule)
  },
  {
    path: 'busca-consultas/:nome',
    redirectTo: 'busca-consultas/:nome',
    pathMatch: 'full'
  },
  {
    path: 'busca-psicologos/:nome',
    loadChildren: () => import('./busca-psicologos/busca-psicologos.module').then( m => m.BuscaPsicologosPageModule)
  },
  {
    path: 'busca-psicologos/:nome',
    redirectTo: 'busca-psicologos/:nome',
    pathMatch: 'full'
  },
  {
    path: 'home/:nome',
    redirectTo: 'home/:nome',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
