import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {UsuarioModel} from '../models/usuario.model';
import {AplicacaoModel} from '../models/Aplicacao.model';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private _usuarioAutenticado: boolean;
  private _usuarioLogadoSubject: BehaviorSubject<UsuarioModel>;
  public usuarioLogado: Observable<UsuarioModel>;


  private _aplicacaoSubject: BehaviorSubject<AplicacaoModel>;
  public aplicacao: Observable<AplicacaoModel>;

  constructor(private http: HttpClient) {
    this._usuarioLogadoSubject = new BehaviorSubject<UsuarioModel>(JSON.parse(localStorage.getItem('usuario')));
    this.usuarioLogado = this._usuarioLogadoSubject.asObservable();

    this._aplicacaoSubject = new BehaviorSubject<AplicacaoModel>(JSON.parse(localStorage.getItem('aplicacao')));
    this.aplicacao = this._aplicacaoSubject.asObservable();
  }


  /***
   * Obtem usuário logado
   */
  public getUsuarioLogado(): UsuarioModel {
    return this._usuarioLogadoSubject.value;
  }


  /**
   * Define usuário como _usuarioAutenticado
   */
  public setUsuarioAutenticado(usuario: UsuarioModel): void {
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this._usuarioLogadoSubject.next(usuario);
    this._usuarioAutenticado = true;
  }

  /***
   * Verifica se usuário está _usuarioAutenticado
   */
  public validaUsuarioAutenticado(): boolean {
    return this._usuarioAutenticado;
  }


  /***
   * Obtem dados inciais da aplicação
   */
  public obterAplicacao() {
    return this.http.get<any>(`${environment.apiUrl}/aplicacao`)
      .pipe(map(result => {
        return result;
      }));
  }

  /***
   * Define aplicação padrão
   * @param app
   */
  public setAplicacao(app: AplicacaoModel) {
    localStorage.setItem('aplicacao', JSON.stringify(app));
    this._aplicacaoSubject.next(app);
  }

  /***
   * Obtem aplicação atual
   */
  public getAplicacao(): AplicacaoModel {
    return this._aplicacaoSubject.value;
  }


  /**
   * Executa autenticação de usuário
   * @param email
   * @param senha
   */
  public login(email: string, senha: string) {
    return this.http.post<any>(`${environment.apiUrl}/autenticacao/autenticar`, {email, senha})
      .pipe(map(result => {
        return result;
      }));
  }

  /**
   * Executa recuperação de senha do usuário
   * @param email
   */
  public recuperarSenha(email: string) {
    return this.http.post<any>(`${environment.apiUrl}/autenticacao/recuperar`, {email})
      .pipe(map(result => {
        return result;
      }));
  }


  /**
   * Efetua lougout da conta do usuário
   */
  public logout(): void {
    this._usuarioAutenticado = false;
    localStorage.removeItem('usuario');
    localStorage.removeItem('aplicacao');
    this._usuarioLogadoSubject.next(null);
    this._aplicacaoSubject.next(null);
  }


}
