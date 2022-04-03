import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  nome: string;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

 constructor(private router: Router, private routeActivated: ActivatedRoute) { }

  ngOnInit() {
    this.nome = this.routeActivated.snapshot.params.nome;
  }

  marcarConsultas(){
    this.router.navigate(['marcar-consultas']);

  }

  consultasAgendadas(){
    this.router.navigate(['consultas-agendadas']);

  }



}
