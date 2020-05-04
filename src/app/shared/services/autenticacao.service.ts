import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {AutenticacaoModel} from '../models/autenticacao.model';
import {UsuarioModel} from '../models/usuario.model';
import {RetornoModel} from '../models/retorno.model';
import {AplicacaoModel} from '../models/aplicacao.model';

@Injectable({
    providedIn: 'root'
})


export class AutenticacaoService {


    constructor(private _httpClient: HttpClient) {

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
