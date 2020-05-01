import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {SessionStorageService} from '../services/sessionStorage.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(private sessionService: SessionStorageService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        let newHeaders;
        newHeaders = req.headers.set('Content-Type', 'application/json');
        if (this.sessionService.getData('token') !== null) {
            newHeaders = req.headers.set('Authorization', 'Bearer ' + this.sessionService.getData('token'));
        }
        if (this.sessionService.getData('sessaoId') !== null) {
            newHeaders = req.headers.set('SessionId', this.sessionService.getData('sessaoId'));
        }
        if (this.sessionService.getData('deviceId') !== null) {
            newHeaders = req.headers.set('DeviceId', this.sessionService.getData('deviceId'));
        }
        return next.handle(req.clone({headers: newHeaders}));
    }
}


