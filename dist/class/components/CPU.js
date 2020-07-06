import { Component } from '../component.js';
export class CPU extends Component {
    constructor(id, name, model, brand, price, type) {
        super(id, name, model, brand, price, type);
        this.processor = () => {
            console.log("Proceso data");
        };
    }
}
