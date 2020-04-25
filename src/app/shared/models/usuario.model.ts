import {BaseModel} from './base.model';

export class UsuarioModel extends BaseModel {

  constructor() {
    super();
  }

  id: string;
  email: string;
  login: string;
  senha: string;
  cpf: string;
  nome: string;
  celular: string;
  token: string;
  acessoNivelId: string;
  acessoNivelDescricao: string;
  empresaDescricao: string;
  foto: string;

  empresaId: number;

  dataNascimento: Date;

  novaSenha: boolean;
  ativo: boolean;
  removido: boolean;


}






