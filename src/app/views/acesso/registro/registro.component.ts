import {Component, OnInit} from '@angular/core';
import {RegistroViewModel} from '../../../viewModels/acesso/registro.view.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'registro.component.html'
})
export class RegistroComponent implements OnInit {


  constructor(private viewModel: RegistroViewModel) {

  }


  ngOnInit() {

  }


}
