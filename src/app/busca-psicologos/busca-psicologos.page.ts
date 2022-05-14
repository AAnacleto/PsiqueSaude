import { Psicologos } from './../shared/classes/psicologos';
import { BuscaPsicologosService } from './buscaPsicologosService/busca-psicologos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-busca-psicologos',
  templateUrl: './busca-psicologos.page.html',
  styleUrls: ['./busca-psicologos.page.scss'],
})
export class BuscaPsicologosPage implements OnInit {

  psicologo: Psicologos = new Psicologos();
  listaPsicologos: Psicologos[] = [];
  faculdade: string;
  descricao: boolean;
  horario: boolean;

  constructor(private routeActivated: ActivatedRoute,
              private buscaPsicologosService: BuscaPsicologosService,
              private router: Router,
              public loadingController: LoadingController
              ) { }

  ngOnInit() {
    this.faculdade = this.routeActivated.snapshot.params.nome;
    this.descricao = false;
    this.horario = false;
    this.presentLoading();
    setTimeout(()=>{
      this.pesquisarPorFaculdade();

 }, 2000);
  }

  pesquisarPorFaculdade(){
    this.buscaPsicologosService.consultarPsicologoPorFaculdade(this.faculdade).subscribe(
      data =>{
        this.listaPsicologos = (data as Psicologos[]);
        console.log(this.listaPsicologos);
      }
    );
  }

  abrirDescricao(i){

    this.listaPsicologos[i].eventoDescricao = !this.listaPsicologos[i].eventoDescricao;
  }

  abrirHorario(i){

    this.listaPsicologos[i].eventoHora = !this.listaPsicologos[i].eventoHora;
  }

  verPsicologo(i){
    this.router.navigate(['agendar-consultas/' + this.listaPsicologos[i].id]);

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
