import { Printer } from './printer.js';
import { iOutputDevice } from '../../interfaces/iOutputDevice.js';

export class InkjectPrinter extends Printer implements iOutputDevice{
    out: Function;
    constructor(id: string, name: string, model:string, brand: string, price:number, type:string) {
        super( id, name, model, brand, price, type)
        this.out = () => {
            console.log("Imprime data mediante hojas atravez de inyección");
        }
    }
}
