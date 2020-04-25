import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {UtilService} from './util.service';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})


export class RegistroService {

    constructor(private _httpClient: HttpClient,
                private _utilService: UtilService) {
    }


    // Obtem todos os carros
    getTeste(): Observable<any> {
        return this._httpClient.get<any>(environment.backendUrl + 'teste/status')
            .pipe(map(result => {
                return result;
            }));
    }


}
