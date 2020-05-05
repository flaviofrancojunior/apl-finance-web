import {BaseModel} from './base.model';

export class UsuarioModel extends BaseModel {

    constructor() {
        super();
    }

    id: string;
    ativo: boolean = false;
    email: string;
    proprietario: boolean = false;
    nome: string;
    foto: string;
    token: string;
    dataCadastro: Date;
    alteracoesSenha: Array<Date>;
    sessaoId: string;
}






