import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';


@Injectable({
    providedIn: 'root'
})


export class UtilService {


    public handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }

}
