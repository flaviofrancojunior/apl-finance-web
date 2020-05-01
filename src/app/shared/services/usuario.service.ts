import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {AutenticacaoModel} from '../models/autenticacao.model';
import {UsuarioModel} from '../models/usuario.model';

@Injectable({
    providedIn: 'root'
})


export class UsuarioService {


    constructor(private _httpClient: HttpClient) {

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


}
