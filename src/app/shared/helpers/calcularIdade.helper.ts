import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcularIdadeHelper {

  constructor() {

  }

  /**
   * Calcula iddade com base na data informada
   * @param data
   */
  calcular(data: Date): number {
    const birthday: any = new Date(data);
    const hoje = new Date();
    let idade: number = ((Date.now() - birthday) / (31557600000));

    const bDia = birthday.getDate();
    const bMes = birthday.getMonth();

    const hDia = hoje.getDate();
    const hMes = hoje.getMonth();


    if (bDia === hDia && bMes === hMes) {
      Math.floor(idade++);
    }
    return Math.trunc(idade);
  }


}

