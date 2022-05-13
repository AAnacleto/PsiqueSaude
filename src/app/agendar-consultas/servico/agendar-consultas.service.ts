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
}
