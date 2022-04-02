import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuscaPsicologosService {

  constructor(private http: HttpClient) { }

  consultarPsicologoPorFaculdade(faculdade: string){
    return this.http.get('http://localhost:3000/Psicologos/?instituicao=' + faculdade );
  }
}
