import {Component, OnInit} from '@angular/core';
import {LoginViewModel} from '../../../viewModels/acesso/login.view.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {

  constructor(private viewModel: LoginViewModel) {
  }

  ngOnInit() {
  }


}


