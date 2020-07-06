import { Component } from '../component.js';
import { iInputDevice } from '../../interfaces/iInputDevice.js';

export class GraphicTablet extends Component implements iInputDevice {
    in: Function;
    constructor(id: string, name: string, model:string, brand: string, price:number, type:string) {
        super( id, name, model, brand, price, type)
        this.in = () => {
            console.log("Ingresa data mediante el touch");
        }
    }
}