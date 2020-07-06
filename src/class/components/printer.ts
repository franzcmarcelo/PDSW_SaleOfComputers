import { Component } from '../component.js';

export class Printer extends Component {
    constructor(id: string, name: string, model:string, brand: string, price:number, type:string) {
        super( id, name, model, brand, price, type)
    }
}