import { Component } from "./component.js";

export class Proforma {

    finalPrice: number;
    constructor(){
        this.finalPrice = 0
    }

    calculatorPrice(componentsFinal: Component[]){
        this.finalPrice = 0
        for (const component of componentsFinal) {
            this.finalPrice = this.finalPrice + component.price
        }
        // console.log(`Final price: ${this.finalPrice}`);
    }

    get FinalPrice(): number{
        return this.finalPrice;
    }

}