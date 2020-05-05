import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {AutenticacaoModel} from '../models/autenticacao.model';
import {UsuarioModel} from '../models/usuario.model';
import {RetornoModel} from '../models/retorno.model';
import {AplicacaoModel} from '../models/aplicacao.model';
import {SessionStorageService} from './sessionStorage.service';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})


export class AutenticacaoService {


    constructor(private router: Router,
                private sessionService: SessionStorageService,
                private _httpClient: HttpClient) {

    }


    /***
     * Obtem usuário logado
     */
    public getUsuarioLogado(): UsuarioModel {
        return this.sessionService.getData('usuario');

    }

    public logout(): void {
        this.sessionService.limpar();
        this.router.navigate(['/login']);
    }

    /***
     * Verifica se usuário está autenticado
     */
    public validaUsuarioAutenticado(): boolean {
        return this.sessionService.getData('sessaoId') !== undefined && this.sessionService.getData('sessaoId') !== null;
    }


    /**
     * Executa autenticação de um usuário.
     * @param dados
     */
    public obterAplicacao(): Observable<AplicacaoModel> {
        return this._httpClient.get<AplicacaoModel>(environment.backendUrl + 'autenticacao/aplicacao')
            .pipe(map(result => {
                return result;
            }));
    }

    /**
     * Executa autenticação de um usuário.
     * @param dados
     */
    public autenticar(dados: AutenticacaoModel): Observable<UsuarioModel> {
        return this._httpClient.post<UsuarioModel>(environment.backendUrl + 'autenticacao/autenticar', dados)
            .pipe(map(result => {
                return result;
            }));
    }

    /**
     * Executa recuperação de senha para emial informado
     * @param dados
     */
    public recuperarSenha(email: string): Observable<RetornoModel> {
        return this._httpClient.post<RetornoModel>(environment.backendUrl + 'autenticacao/senha/recuperar', {'email': email})
            .pipe(map(result => {
                return result;
            }));
    }


}
