import {Component, OnInit} from '@angular/core';
import {RecuperarSenhaViewModel} from '../../../viewModels/acesso/recuperarSenha.view.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'recuperarSenha.component.html'
})

export class RecuperarSenhaComponent implements OnInit {


  constructor(private viewModel: RecuperarSenhaViewModel) {
  }

  ngOnInit() {

  }


}


