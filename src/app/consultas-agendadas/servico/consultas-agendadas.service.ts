import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultasAgendadasService {

  constructor(private http: HttpClient) { }

  pegarConsultas(nome: string){
    return this.http.get('http://localhost:3000/Consultas/?paciente=' + nome);
  }
}
