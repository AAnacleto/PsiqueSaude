import { Consultas } from './../../shared/classes/consultas';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendarConsultasService {

  constructor(private http: HttpClient) { }

  consultarPsicologos(id: number){
    return this.http.get('http://localhost:3000/Psicologos/?id=' + id);

  }

  consultarInstituicao(nome: string){
    return this.http.get('http://localhost:3000/Instituicoes/?nome=' + nome);
  }

  cadastrarConsulta(consulta: Consultas){
    return this.http.post('http://localhost:3000/Consultas', consulta);
  }
}
