import {ConfiguracaoModel} from '../app/shared/models/configuracao.model';

export const environment: ConfiguracaoModel = {
    production: false,
    aplicacao: {
        nome: 'J.Safra Clube - reserva e Hospedagens',
        proprietario: 'Banco Safra SA',
        versao: 0,
        build: 0,
        release: 'dev',
        id: '5d6d698641e27a53222cca17'
    },
    backendUrl: 'http://localhost:5001/api/v1/',
    requestTimout: 15000
};
