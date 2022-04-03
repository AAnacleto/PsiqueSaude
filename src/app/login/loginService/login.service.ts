import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from 'src/app/shared/classes/users';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  verificarLogin(usuario: Users){
    return this.http.get('http://localhost:3000/Usuarios/?usuario='+ usuario.usuario);
  }
}
