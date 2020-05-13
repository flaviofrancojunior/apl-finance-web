import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class BaseComponet {

    constructor(private router: Router) {

    }

    /**
     * Inicialização da view model
     */
    protected onInit() {

    }


    /**
     * Inicializa rota informada

     */
    protected irPara(rota: string) {
        this.router.navigate([rota]);
    }

    /**
     * Inicializa rota informada com parametro
     */
    protected irParaComParametro(rota: string, parametro: object) {
        this.router.navigate([rota], {queryParams: {parametro: JSON.stringify(parametro)}});
    }

    /***
     * Exporta objeto para CSV
     */
    public exportarCSV(data: any, fileName: string): void {
        const separator = ',';
        const keys = Object.keys(data[0]);
        const csvContent =
            keys.join(separator) +
            '\n' +
            data.map(row => {
                return keys.map(k => {
                    let cell = row[k] === null || row[k] === undefined ? '' : row[k];
                    if (typeof cell === 'object') {
                        cell = JSON.stringify(cell);
                    }
                    cell = cell instanceof Date
                        ? cell.toLocaleString()
                        : cell.toString().replace(/"/g, '""');
                    if (cell.search(/([",\n])/g) >= 0) {
                        cell = `"${cell}"`;
                    }

                    return cell;
                }).join(separator);
            }).join('\n');

        const blob = new Blob([csvContent], {type: 'text/csv;charset=utf-8;'});
        if (window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveBlob(blob, fileName);
        } else {
            const elem = window.document.createElement('a');
            elem.href = window.URL.createObjectURL(blob);
            elem.download = fileName;
            document.body.appendChild(elem);
            elem.click();
            document.body.removeChild(elem);
        }
    }


}
