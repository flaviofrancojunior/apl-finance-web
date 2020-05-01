import {Injectable} from '@angular/core';
import {HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {SessionStorageService} from '../services/sessionStorage.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(private sessionService: SessionStorageService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        let headers = null;

        if (this.sessionService.getData('token') !== null) {
            headers = new HttpHeaders()
                .set('content-type', 'application/json')
                .set('Access-Control-Allow-Origin', '*')
                .set('Authorization', 'Bearer ' + this.sessionService.getData('token'))
                .set('SessaoId', this.sessionService.getData('sessaoId'))
                .set('deviceId', this.sessionService.getData('deviceId'));
        } else {
            headers = new HttpHeaders()
                .set('content-type', 'application/json')
                .set('Access-Control-Allow-Origin', '*');
        }

        const authReq = req.clone({
            headers: headers
        });

        return next.handle(authReq);

    }
}


