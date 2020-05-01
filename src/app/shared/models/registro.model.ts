import {BaseModel} from './base.model';

export class RegistroModel extends BaseModel {

    constructor() {
        super();
    }

    email: string;
    senha: string;
    nome: string;
    confirmaSenha: boolean;
    aceite: boolean = false;
    codigoValidacao: string;

}






