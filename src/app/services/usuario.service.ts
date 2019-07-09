import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UsuarioModel} from '../models/UsuarioModel';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<UsuarioModel[]>(`${environment.apiUrl}/usuarios`);
  }
}
