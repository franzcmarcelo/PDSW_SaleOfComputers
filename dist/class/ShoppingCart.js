export class Proforma {
    constructor() {
        this.finalPrice = 0;
    }
    calculatorPrice(componentsFinal) {
        this.finalPrice = 0;
        for (const component of componentsFinal) {
            this.finalPrice = this.finalPrice + component.price;
        }
        // console.log(`Final price: ${this.finalPrice}`);
    }
    get FinalPrice() {
        return this.finalPrice;
    }
}
