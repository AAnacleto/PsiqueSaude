import { Consultas } from './../shared/classes/consultas';
import { AgendarConsultasService } from './servico/agendar-consultas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Psicologos } from '../shared/classes/psicologos';
import { LoadingController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';




@Component({
  selector: 'app-agendar-consultas',
  templateUrl: './agendar-consultas.page.html',
  styleUrls: ['./agendar-consultas.page.scss'],
})
export class AgendarConsultasPage implements OnInit {
  psicologo: Psicologos = new Psicologos();
  consulta: Consultas = new Consultas();
  id: number;
  isDisabled = true;
  perfil: boolean;
  avaliacoes: boolean;
  horario: boolean;
  dateValue = format(new Date(), 'yyy-MM-dd') + 'T09:00:00.000Z';
  formattedString: string;

  constructor(private routeActivated: ActivatedRoute,
              private agendarConsultaService: AgendarConsultasService,
              public loadingController: LoadingController) { }


  ngOnInit() {
    this.id = this.routeActivated.snapshot.params.id;
    this.perfil = false;
    this.avaliacoes = false;
    this.horario = false;
    this.consulta.paciente = localStorage.getItem('User');
    this.presentLoading();
    setTimeout(()=>{
      this.getPsicologos();

 }, 2000);
  }

  getPsicologos(){
    this.agendarConsultaService.consultarPsicologos(this.id).subscribe(
      data => {
        this.psicologo = (data as Psicologos)[0];
        this.consulta.psicologo = this.psicologo.nome;
        this.consulta.instituicao = this.psicologo.instituicao;

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

  dateChanged(value){
    this.consulta.data = format(parseISO(value), 'dd/MM/yyyy');
    this.consulta.hora = format(parseISO(value), 'HH:mm');
  }

 marcarConsulta(){
   this.consulta.status = 'Aberto';
   console.log(this.consulta);
 }

}
