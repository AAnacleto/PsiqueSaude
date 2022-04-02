import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuscaConsultasService } from '../busca-consultas/buscaConsultasService/busca-consultas.service';

@Component({
  selector: 'app-marcar-consultas',
  templateUrl: './marcar-consultas.page.html',
  styleUrls: ['./marcar-consultas.page.scss'],
})
export class MarcarConsultasPage implements OnInit {

  cidades = [
    {
      nome: 'Recife'
    },
    {
      nome: 'Olinda'
    },
    {
      nome: 'Paulista'
    }
  ];

  constructor(    private router: Router,
    ) { }

  ngOnInit() {
  }

  buscarInstituicoes(cidade: string){
    this.router.navigate(['busca-consultas/' + cidade]);
  }

}
