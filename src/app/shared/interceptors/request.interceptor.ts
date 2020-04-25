import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {UsuarioModel} from '../models/usuario.model';
import {DeviceDetectorService} from 'ngx-device-detector';
import {LocalStorageService} from '../services/storage.service';


@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(private deviceService: DeviceDetectorService,
                private localService: LocalStorageService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        let newHeaders;
       // newHeaders = req.headers.set('bcsid', JSON.stringify(this.deviceService.getDeviceInfo()));
        newHeaders = req.headers.set('Content-Type', 'application/json');
        const user = this.localService.getData('usuario');
        // if (user !== undefined) {
        //     const userParse = <UsuarioModel>JSON.parse(user);
        //     if (userParse.id !== undefined) {
        //         newHeaders = req.headers.set('buuid', userParse.nome + ' (' + userParse.id + ')');
        //     }
        // }
        return next.handle(req.clone({headers: newHeaders}));
    }
}


