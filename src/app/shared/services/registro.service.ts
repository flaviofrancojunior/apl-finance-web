import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {RegistroModel} from '../models/registro.model';
import {map} from 'rxjs/operators';
import {RetornoModel} from '../models/retorno.model';

@Injectable({
    providedIn: 'root'
})


export class RegistroService {


    constructor(private _httpClient: HttpClient) {

    }


    /**
     * Salva dadops de registro de usuário
     * @param registro
     */
    public salvar(registro: RegistroModel): Observable<RetornoModel> {
        return this._httpClient.post<RetornoModel>(environment.backendUrl + 'registro/registrar', registro)
            .pipe(map(result => {
                return result;
            }));
    }

    /**
     * Executa ativação de registro do usuário
     * @param registro
     */
    public ativar(registro: RegistroModel): Observable<RetornoModel> {
        return this._httpClient.post<RetornoModel>(environment.backendUrl + 'registro/ativar', registro)
            .pipe(map(result => {
                return result;
            }));
    }


    /**
     * Executa reenvio do código de validação de um registro
     * @param email
     */
    public reenvioCodigo(email: string): Observable<RetornoModel> {
        return this._httpClient.get<RetornoModel>(environment.backendUrl + 'registro/codigo/reenvio/' + email)
            .pipe(map(result => {
                return result;
            }));
    }


}
