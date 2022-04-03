import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Users } from 'src/app/shared/classes/users';
import { LoginService } from '../loginService/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

  @Output() novoRegistro: EventEmitter<boolean>  = new EventEmitter();

  estado: boolean;
  usuario: Users = new Users();
  nome: string;
  retornoUsuario: Users;
  constructor( private loginService: LoginService) { }

  ngOnInit() {

  }

  retornarValor(){
    this.estado = false;
    this.novoRegistro.emit(this.estado);
  }

  voltarPageLogin(){
    this.retornarValor();
    this.usuario = new Users();
  }

  novoCadastro(){
   this.loginService.novoCadastro(this.usuario).subscribe(
     data => {
        console.log(data);
        this.voltarPageLogin();
      }
   );
  }



}
