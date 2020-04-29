import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {ModalHelper} from '../helpers/modal.helper';


@Injectable({
    providedIn: 'root'
})


export class UtilService {
    constructor(private modal: ModalHelper) {
    }
}
