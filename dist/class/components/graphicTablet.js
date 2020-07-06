import { Component } from '../component.js';
export class GraphicTablet extends Component {
    constructor(id, name, model, brand, price, type) {
        super(id, name, model, brand, price, type);
        this.in = () => {
            console.log("Ingresa data mediante el touch");
        };
    }
}
