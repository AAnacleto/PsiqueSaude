import { Instituicao } from './../shared/classes/instituicao';
import { Consultas } from './../shared/classes/consultas';
import { AgendarConsultasService } from './servico/agendar-consultas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Psicologos } from '../shared/classes/psicologos';
import { LoadingController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { ToastController } from '@ionic/angular';




@Component({
  selector: 'app-agendar-consultas',
  templateUrl: './agendar-consultas.page.html',
  styleUrls: ['./agendar-consultas.page.scss'],
})
export class AgendarConsultasPage implements OnInit {
  psicologo: Psicologos = new Psicologos();
  consulta: Consultas = new Consultas();
  instituicao: Instituicao = new Instituicao();
  id: number;
  isDisabled = true;
  perfil: boolean;
  avaliacoes: boolean;
  horario: boolean;
  dateValue = format(new Date(), 'yyy-MM-dd') + 'T09:00:00.000Z';
  formattedString: string;

  constructor(private routeActivated: ActivatedRoute,
              private agendarConsultaService: AgendarConsultasService,
              public loadingController: LoadingController,
              public toastController: ToastController,
              private router: Router
              ) { }


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
        this.agendarConsultaService.consultarInstituicao(this.consulta.instituicao).subscribe(
          retorno => {
             this.instituicao = (retorno as Instituicao)[0];
             console.log(this.instituicao);
             this.consulta.endereco = this.instituicao.endereco;

          }
        );
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

  cadastrarConsulta(){
    this.consulta.status= 'Ativo';
    this.agendarConsultaService.cadastrarConsulta(this.consulta).subscribe(
      data =>{
        console.log(data);

      }
    );
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Consulta cadastrada com sucesso.',
      duration: 3000
    });
    toast.present();
  }

 marcarConsulta(){
   this.cadastrarConsulta();
   this.presentToast();
   setTimeout(()=>{
    this.router.navigate(['consultas-agendadas/'+ this.consulta.paciente]);
    }, 2000);
   console.log(this.consulta);
 }

}
