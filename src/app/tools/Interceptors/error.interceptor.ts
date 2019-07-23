import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ErroModel} from '../../models/erro.model';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<ErroModel>> {

    return next.handle(request).pipe(catchError(err => {

      let erroRertono: ErroModel = new ErroModel();

      if (err.status === 404 || err.status <= 0) {
        erroRertono.status = 404;
        erroRertono.mensagemTexto = 'Endereço de requisição não encontrado.';
        erroRertono.mensagemTitulo = 'Oops! Problemas no caminho';
        return throwError(erroRertono);
      }
      erroRertono = <ErroModel>err.error;
      return throwError(erroRertono);

    }));
  }
}
