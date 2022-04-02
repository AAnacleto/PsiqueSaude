import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BuscaConsultasService {

  constructor(private http: HttpClient) { }

  consultarPorCidade(cidade: string){
    return this.http.get('http://localhost:3000/instituicoes/?endereco.cidade='+ cidade);
  }
}
