import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {UsuarioModel} from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private autenticado: boolean;
  private currentUserSubject: BehaviorSubject<UsuarioModel>;
  public currentUser: Observable<UsuarioModel>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UsuarioModel>(JSON.parse(localStorage.getItem('usuarioAtual')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UsuarioModel {
    return this.currentUserSubject.value;
  }

  /**
   * Executa autenticação de usuário
   * @param email
   * @param senha
   */
  public login(email: string, senha: string) {
    return this.http.post<any>(`${environment.apiUrl}/autenticacao/autenticar`, {email, senha})
      .pipe(map(user => {
        user.authdata = window.btoa(email + ':' + senha);
        localStorage.setItem('usuarioAtual', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  /**
   * Efetua lougout da conta do usuário
   */
  logout() {
    this.autenticado = false;
    localStorage.removeItem('usuarioAtual');
    this.currentUserSubject.next(null);
  }


  /**
   * Define usuário como autenticado
   */
  public setAutenticado() {
    this.autenticado = true;
  }

  /***
   * Verifica se usuário está autenticado
   */
  public isAuthenticated() {
    return this.autenticado;
  }


}
