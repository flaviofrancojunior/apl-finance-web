import {ConfiguracaoModel} from '../app/shared/models/configuracao.model';

export const environment: ConfiguracaoModel = {
    production: false,
    backendUrl: 'https://192.168.0.12:5001/api/v1/',
    localidadeApiUrl: 'https://servicodados.ibge.gov.br/api/v1/localidades/',
    requestTimout: 15000
};
