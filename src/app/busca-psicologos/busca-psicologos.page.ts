import { Psicologos } from './../shared/classes/psicologos';
import { BuscaPsicologosService } from './buscaPsicologosService/busca-psicologos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private routeActivated: ActivatedRoute, private buscaPsicologosService: BuscaPsicologosService) { }

  ngOnInit() {
    this.faculdade = this.routeActivated.snapshot.params.nome;
    this.descricao = false;
    this.horario = false;
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

}
