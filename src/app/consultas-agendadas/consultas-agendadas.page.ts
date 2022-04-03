import { ConsultasAgendadasService } from './servico/consultas-agendadas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuscaPsicologosService } from '../busca-psicologos/buscaPsicologosService/busca-psicologos.service';
import { Consultas } from '../shared/classes/consultas';

@Component({
  selector: 'app-consultas-agendadas',
  templateUrl: './consultas-agendadas.page.html',
  styleUrls: ['./consultas-agendadas.page.scss'],
})
export class ConsultasAgendadasPage implements OnInit {

  nome: string;
  listaConsultas: Consultas[] = [];

  constructor(private routeActivated: ActivatedRoute, private consultasAgendadasService: ConsultasAgendadasService) { }

  ngOnInit() {
    this.nome = this.routeActivated.snapshot.params.nome;
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

}
