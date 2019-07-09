import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {UsuarioModel} from '../models/UsuarioModel';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private currentUserSubject: BehaviorSubject<UsuarioModel>;
  public currentUser: Observable<UsuarioModel>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UsuarioModel>(JSON.parse(localStorage.getItem('usuarioAtual')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UsuarioModel {
    return this.currentUserSubject.value;
  }

  login(email: string, senha: string) {
    return this.http.post<any>(`${environment.apiUrl}/autenticacao/autenticar`, {email, senha})
    .pipe(map(user => {
      // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
      user.authdata = window.btoa(email + ':' + senha);
      localStorage.setItem('usuarioAtual', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user;
    }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('usuarioAtual');
    this.currentUserSubject.next(null);
  }

  public isAuthenticated() {
    return true;
  }


}
