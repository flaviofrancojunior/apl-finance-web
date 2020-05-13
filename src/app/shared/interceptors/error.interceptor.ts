import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ErroModel} from '../models/erro.model';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor() {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<ErroModel>> {
        return next.handle(request)
            .pipe(
                catchError((err: HttpErrorResponse) => {
                    let erroRetorno: ErroModel = new ErroModel();
                    if (err.error.statusProcessamento !== undefined) {
                        if (err.error.statusProcessamento.code === '400' && err.error.statusProcessamento.message.search('JWT') > -1) {
                            erroRetorno.status = 401;
                            erroRetorno.mensagemTexto = 'Sua sessão expirou! Faça um novo login.';
                            erroRetorno.mensagemTitulo = 'Autenticação Expirada!';
                            erroRetorno.expirado = true;
                            return throwError(erroRetorno);
                        } else if (err.error.statusProcessamento.message.search('mensagemTitulo') < 0) {
                            if (err.status === 404 || err.status <= 0) {
                                erroRetorno.status = 404;
                                erroRetorno.mensagemTexto = 'Endereço de requisição não encontrado.';
                                erroRetorno.mensagemTitulo = 'Oops! Problemas no caminho';
                                return throwError(erroRetorno);
                            } else if (err.status === 401) {
                                erroRetorno.status = 401;
                                erroRetorno.mensagemTexto = err.error.statusProcessamento.message;
                                erroRetorno.mensagemTitulo = 'Não Autorizado!';
                                return throwError(erroRetorno);
                            } else if (err.status === 500 && err.error.statusProcessamento.message.length <= 0) {
                                erroRetorno.status = 500;
                                erroRetorno.mensagemTexto = 'Erro no processamento! Não foi possível indentificar o erro.';
                                erroRetorno.mensagemTitulo = 'Erro Inexperado!';
                                return throwError(erroRetorno);
                            } else if (err.status === 500 && err.error.statusProcessamento.message.search('ECONNRESET') > 0) {
                                erroRetorno.status = 500;
                                erroRetorno.mensagemTexto = 'Sua sessão expirou! Faça um novo login.';
                                erroRetorno.mensagemTitulo = 'Autenticação Expirada!';
                                erroRetorno.expirado = true;
                                return throwError(erroRetorno);
                            }

                        }
                        erroRetorno = <ErroModel>JSON.parse(err.error.statusProcessamento.message);
                        if (erroRetorno.mensagemTexto === undefined) {
                            erroRetorno.status = 500;
                            erroRetorno.mensagemTexto = err.error.statusProcessamento.message;
                            erroRetorno.mensagemTitulo = 'Erro Inexperado!';
                        }
                        return throwError(erroRetorno);

                    } else {
                        erroRetorno = <ErroModel>err.error;
                        return throwError(erroRetorno);
                    }
                })
            );
    }
}
