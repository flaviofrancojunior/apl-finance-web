import {Component, OnInit} from '@angular/core';
import {AutenticacaoService} from '../../../services/autenticacao.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'recuperarSenha.component.html'
})

export class RecuperarSenhaComponent implements OnInit {


  constructor(private autenticacaoService: AutenticacaoService) {
  }

  ngOnInit() {

  }

  /**
   * envio do formulário
   */
  private recuperarSenha(email: string) {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(email, null, 4));
  }


}


