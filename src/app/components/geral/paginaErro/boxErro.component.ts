import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-box-erro',
  templateUrl: 'boxErro.component.html'
})

export class BoxErroComponent implements OnInit {

  @Input() erroTitulo: string;
  @Input() erroMensagem: string;
  @Input() erroCodigo: string;
  @Output() fechaBox = new EventEmitter();

  constructor() {
  }


  ngOnInit() {

  }

  /**
   * emite sinal de fechamento do box para o componente pai
   */
  private fechar() {
    this.fechaBox.emit(false);
  }


}


