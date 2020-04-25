import {AplicacaoModel} from './Aplicacao.model';


export class ConfiguracaoModel {
    production: boolean;
    aplicacao: AplicacaoModel;
    backendUrl: any;
    requestTimout: any;
}
