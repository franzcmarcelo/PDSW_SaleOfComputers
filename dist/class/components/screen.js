import { Component } from '../component.js';
export class Screen extends Component {
    constructor(id, name, model, brand, price, type) {
        super(id, name, model, brand, price, type);
        this.out = () => {
            console.log("Imprime data mediante el screen");
        };
    }
}
