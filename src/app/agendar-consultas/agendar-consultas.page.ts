import { AgendarConsultasService } from './servico/agendar-consultas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Psicologos } from '../shared/classes/psicologos';
import { LoadingController } from '@ionic/angular';




@Component({
  selector: 'app-agendar-consultas',
  templateUrl: './agendar-consultas.page.html',
  styleUrls: ['./agendar-consultas.page.scss'],
})
export class AgendarConsultasPage implements OnInit {
  psicologo: Psicologos = new Psicologos();
  id: number;
  isDisabled = true;
  perfil: boolean;
  avaliacoes: boolean;
  horario: boolean;

  constructor(private routeActivated: ActivatedRoute,
              private agendarConsultaService: AgendarConsultasService,
              public loadingController: LoadingController) { }


  ngOnInit() {
    this.id = this.routeActivated.snapshot.params.id;
    this.perfil = false;
    this.avaliacoes = false;
    this.horario = false;
    this.presentLoading();
    setTimeout(()=>{
      this.getPsicologos();

 }, 2000);
  }

  getPsicologos(){
    this.agendarConsultaService.consultarPsicologos(this.id).subscribe(
      data => {
        this.psicologo = (data as Psicologos)[0];
        console.log(this.psicologo);
        console.log(this.psicologo.nome);
      }
    );
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

  abrirPerfil(){
    this.perfil = !this.perfil;
  }

  abrirAvaliacoes(){
    this.avaliacoes = !this.avaliacoes;
  }

  abrirHorarios(){
    this.horario = !this.horario;
  }

}
