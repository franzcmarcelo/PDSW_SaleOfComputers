import { Component } from '../component.js';
export class TouchScreen extends Component {
    constructor(id, name, model, brand, price, type) {
        super(id, name, model, brand, price, type);
        this.in = () => {
            console.log("Ingresa data mediante el touch");
        };
        this.out = () => {
            console.log("Imprime data mediante el screen");
        };
    }
}
