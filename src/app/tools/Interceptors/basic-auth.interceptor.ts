import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AutenticacaoService} from '../../services/autenticacao.service';


@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AutenticacaoService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // interceptando request e adicionado cabeçalho de segurança
    const currentUser = this.authenticationService.getUsuarioLogado();
    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Basic ${currentUser.token}`,
          UsuarioId: '0001-flavio'
        }
      });
    }
    return next.handle(request);
  }
}
