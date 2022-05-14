import { Instituicao } from './../shared/classes/instituicao';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BuscaConsultasService } from './buscaConsultasService/busca-consultas.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-busca-consultas',
  templateUrl: './busca-consultas.page.html',
  styleUrls: ['./busca-consultas.page.scss'],
})
export class BuscaConsultasPage implements OnInit {

  instituicao: Instituicao = new Instituicao();
  listInstituicao: Instituicao[] = [];
  nome: string;

  constructor(  private router: Router,
                private buscaConsultasService: BuscaConsultasService,
                private routeActivated: ActivatedRoute,
                public loadingController: LoadingController

                ) { }

  ngOnInit() {
   this.nome = this.routeActivated.snapshot.params.nome;
   this.presentLoading();
    setTimeout(()=>{
      this.pesquisarPorCidade();

 }, 2000);
  }

 pesquisarPorCidade(){
   this.buscaConsultasService.consultarPorCidade(this.nome).subscribe(
     data =>{
       this.listInstituicao = (data as Instituicao[]);
       console.log(this.listInstituicao);
     }
   ); }

 verPsicologos(nome: string){
  this.router.navigate(['busca-psicologos/' + nome]);
 }

 async presentLoading() {
  const loading = await this.loadingController.create({
    message: 'Carregando',
    duration: 2000
  });
  await loading.present();

  const { role, data } = await loading.onDidDismiss();

  console.log('Loading dismissed!');
}

}
