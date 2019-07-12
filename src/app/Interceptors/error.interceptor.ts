import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AutenticacaoService} from '../services/autenticacao.service';
import {ErroModel} from '../models/erro.model';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AutenticacaoService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<ErroModel>> {
    return next.handle(request).pipe(catchError(err => {
      const erroRertono = new ErroModel();
      if (err.status === 401) {
        this.authenticationService.logout();
        location.reload(true);
      } else if (err.status === 404) {
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
