import { Component } from '../component.js';
import { iDataProcessor } from '../../interfaces/iDataProcessor.js'

export class CPU extends Component implements iDataProcessor {
    processor: Function;
    constructor(id: string, name: string, model:string, brand: string, price:number, type:string) {
        super( id, name, model, brand, price, type)
        this.processor = () => {
            console.log("Proceso data");
        }
    }
}