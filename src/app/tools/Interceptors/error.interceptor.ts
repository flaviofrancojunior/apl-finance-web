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

      console.log('a', err.error);
      console.log('b', err.statusText);
      console.log('c', err.status);

      const erroRertono: ErroModel = new ErroModel();

      if (err.status === 404 || err.status <= 0) {
        erroRertono.codigo = '404';
        erroRertono.mensagem = 'Endereço de requisição não encontrado.';
        erroRertono.titulo = 'Oops! Problemas no caminho.';
        return throwError(erroRertono);
      }
      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
