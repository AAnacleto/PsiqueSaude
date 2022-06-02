import { ConsultasAgendadasService } from './servico/consultas-agendadas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuscaPsicologosService } from '../busca-psicologos/buscaPsicologosService/busca-psicologos.service';
import { Consultas } from '../shared/classes/consultas';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-consultas-agendadas',
  templateUrl: './consultas-agendadas.page.html',
  styleUrls: ['./consultas-agendadas.page.scss'],
})
export class ConsultasAgendadasPage implements OnInit {

  nome: string;
  listaConsultas: Consultas[] = [];

  constructor(private routeActivated: ActivatedRoute,
              private consultasAgendadasService: ConsultasAgendadasService,
              public loadingController: LoadingController,

              ) { }

  ngOnInit() {
    this.nome = this.routeActivated.snapshot.params.nome;
    this.presentLoading();
    setTimeout(()=>{
      this.pesquisarConsultas();

 }, 2000);
  }

  pesquisarConsultas(){
    this.consultasAgendadasService.pegarConsultas(this.nome).subscribe(
      data => {
        this.listaConsultas = (data as Consultas[]);
        console.log(this.listaConsultas);

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

}
