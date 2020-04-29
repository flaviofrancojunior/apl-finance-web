import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {RegistroModel} from '../models/registro.model';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})


export class RegistroService {


    constructor(private _httpClient: HttpClient) {

    }


    // Obtem todos os carros
    public salvar(registro: RegistroModel): Observable<RegistroModel> {
        return this._httpClient.post<RegistroModel>(environment.backendUrl + 'registro/registrar', {
            body: registro
        }).pipe(map(result => {
            return result;
        }));
    }


}
