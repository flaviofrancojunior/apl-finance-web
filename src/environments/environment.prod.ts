import {ConfiguracaoModel} from '../app/shared/models/configuracao.model';

export const environment: ConfiguracaoModel = {
    production: false,
    backendUrl: 'http://localhost:5001/api/v1/',
    requestTimout: 15000
};
