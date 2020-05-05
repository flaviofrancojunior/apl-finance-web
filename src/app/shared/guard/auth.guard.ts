import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AutenticacaoService} from '../services/autenticacao.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AutenticacaoService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.validaUsuarioAutenticado();

        if (currentUser) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}
