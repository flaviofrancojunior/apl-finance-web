import {BaseModel} from './base.model';

export class AplicacaoModel extends BaseModel {
    nome: string;
    versao: string;
    logo1: string;
    logo2: string;
    ativo: boolean = false;
    id: string;
}
