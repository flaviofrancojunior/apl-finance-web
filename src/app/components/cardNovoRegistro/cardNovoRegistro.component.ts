import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';


@Component({
  selector: 'app-card-novo-registro',
  templateUrl: 'cardNovoRegistro.component.html'
})

export class CardNovoRegistroComponent implements OnInit {

  @Input() redirect: string;

  constructor() {
  }

  ngOnInit() {

  }


}


