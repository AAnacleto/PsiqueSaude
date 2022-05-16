import { LoginPageModule } from './login.module';
import { Users } from './../shared/classes/users';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './loginService/login.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: Users = new Users();
  retornoUsuario: Users = new Users();
  novoRegistro: boolean;
  receberStatus: string;

  constructor(
    private router: Router,
    private loginService: LoginService,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.novoRegistro = false;
  }

  verificarLogin(){
    this.loginService.verificarLogin(this.usuario).subscribe(
      data => {
        this.retornoUsuario = (data as Users[])[0];
        const usuario = this.retornoUsuario.usuario;
        const senha = this.retornoUsuario.senha;
        const nome = this.retornoUsuario.nome;
        localStorage.setItem('User', nome);
        console.log(this.retornoUsuario);
        console.log(data);

         if(this.retornoUsuario !== undefined){
          if(this.usuario.usuario === usuario && this.usuario.senha === senha){
            console.log('login pode ser efetuado');
            this.entrar();
          } else if (this.usuario.usuario !== usuario && this.usuario.senha !== senha){
            console.log('Não há cadastros para esse usuario e senha');

          } else if (this.usuario.senha !== senha){
            const MENSAGEM_SENHA_INCORRETA = 'Senha Incorreta';
            this.presentToast(MENSAGEM_SENHA_INCORRETA);
          }
         } else {
           console.log('Usuario não existe!');

         }


      }
    );
  }

  entrar(){
    this.router.navigate(['home/' + this.retornoUsuario.nome]);

  }

  registrar(){
    this.novoRegistro = true;
  }

  receberStatusRegistro(retorno: boolean){
    this.novoRegistro = retorno;
    console.log(this.novoRegistro);

  }

  async presentToast(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }


}
