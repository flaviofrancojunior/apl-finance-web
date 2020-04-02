import { Component, OnInit, AfterViewInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-myprofile',
    templateUrl: './myprofile.component.html',
    styleUrls: ['./myprofile.component.scss'],
    animations: [routerTransition()]
})
export class MyprofileComponent implements OnInit {
    constructor() {
    }
    ngOnInit() {
    }

}
