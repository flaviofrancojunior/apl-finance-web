import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})


export class SessionStorageService {

    constructor() {
    }

    getData(key: string): any {
        return JSON.parse(sessionStorage.getItem(key));
    }

    setData(key: string, data: any) {
        sessionStorage.setItem(key, JSON.stringify(data));
    }

}
