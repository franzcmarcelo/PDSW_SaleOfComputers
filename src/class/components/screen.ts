import { Component } from '../component.js';
import { iOutputDevice } from '../../interfaces/iOutputDevice.js';

export class Screen extends Component implements iOutputDevice {
    out: Function;
    constructor(id: string, name: string, model:string, brand: string, price:number, type:string) {
        super( id, name, model, brand, price, type)
        this.out = () => {
            console.log("Imprime data mediante el screen");
        }
    }
}