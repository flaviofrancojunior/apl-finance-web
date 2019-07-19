import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {RegistroModel} from '../models/registro.model';


@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) {

  }

  /**
   * Enviar requisiçãod e novo registro para o servidor
   * @param registro
   */
  public enviarNovoRegistro(registro: RegistroModel) {
    return this.http.post<RegistroModel[]>(`${environment.apiUrl}/cadastro/registro`, registro);
  }


}
