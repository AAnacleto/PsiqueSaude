import { Consultas } from './../../shared/classes/consultas';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultasAgendadasService {

  constructor(private http: HttpClient) { }

  pegarConsultasAtivas(nome: string){
    return this.http.get('http://localhost:3000/Consultas/?paciente=' + nome + '&status=Ativo');
  }

  pegarConsultasInativas(nome: string){
    return this.http.get('http://localhost:3000/Consultas/?paciente=' + nome + '&status=Inativo');
  }

  excluirConsultas(id: string){
    return this.http.delete('http://localhost:3000/Consultas/'+ id);
  }
}
