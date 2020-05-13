import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {LocalidadeModel} from '../models/localidade.model';


@Injectable({
    providedIn: 'root'
})


export class LocalidadeService {

    constructor(private _httpClient: HttpClient) {

    }


    /**
     * Obtém lista de estados brasileiros.
     */
    public obterListaDeEstadosFederacao(): Observable<Array<LocalidadeModel>> {
        return this._httpClient.get<Array<LocalidadeModel>>(environment.localidadeApiUrl + 'estados')
            .pipe(map(result => {
                return result;
            }));
    }


    /**
     * Obtém lista de cidades de um estado brasileiro.
     */
    public obterListaDeCidadesPorUF(uf: string): Observable<Array<LocalidadeModel>> {
        return this._httpClient.get<Array<LocalidadeModel>>(environment.localidadeApiUrl + 'estados/' + uf + '/municipios')
            .pipe(map(result => {
                return result;
            }));
    }
}
