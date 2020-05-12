import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routerTransition} from '../../../router.animations';
import {BaseComponet} from '../../../shared/components/base.componet';


@Component({
    selector: 'app-perfil-menuperfil',
    templateUrl: './menuPerfil.component.html',
    styleUrls: ['./menuPerfil.component.scss'],
    animations: [routerTransition()]
})
export class MenuPerfilComponent extends BaseComponet implements OnInit {

    constructor(router: Router) {
        super(router);
    }

    ngOnInit() {

    }
}



