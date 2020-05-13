import {BaseModel} from './base.model';

export class LocalidadeModel extends BaseModel {

    constructor() {
        super();
    }

    id: string;
    sigla: string;
    nome: string;
    regiao: LocalidadeModel;

}






