import { AgendarConsultasService } from './servico/agendar-consultas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Psicologos } from '../shared/classes/psicologos';

@Component({
  selector: 'app-agendar-consultas',
  templateUrl: './agendar-consultas.page.html',
  styleUrls: ['./agendar-consultas.page.scss'],
})
export class AgendarConsultasPage implements OnInit {
  psicologo: Psicologos = new Psicologos();
  id: number;

  constructor(private routeActivated: ActivatedRoute, private agendarConsultaService: AgendarConsultasService ) { }

  ngOnInit() {
    this.id = this.routeActivated.snapshot.params.id;
    setTimeout(()=>{
      this.getPsicologos();

 }, 2000);
  }

  getPsicologos(){
    this.agendarConsultaService.consultarPsicologos(this.id).subscribe(
      data => {
        this.psicologo = (data as Psicologos);
        console.log(this.psicologo);
      }
    );
  }

}
