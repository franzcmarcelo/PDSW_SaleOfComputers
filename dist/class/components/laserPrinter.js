import { Printer } from './printer.js';
export class LaserPrinter extends Printer {
    constructor(id, name, model, brand, price, type) {
        super(id, name, model, brand, price, type);
        this.out = () => {
            console.log("Imprime data mediante hojas atravez de laser");
        };
    }
}
