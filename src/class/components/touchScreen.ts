import { Component } from '../component.js'
import { iInputDevice } from '../../interfaces/iInputDevice.js'
import { iOutputDevice } from '../../interfaces/iOutputDevice.js'

export class TouchScreen extends Component implements iInputDevice, iOutputDevice{
    in: Function;
    out: Function;
    constructor(id: string, name: string, model:string, brand: string, price:number, type:string) {
        super( id, name, model, brand, price, type)
        this.in = () => {
            console.log("Ingresa data mediante el touch");
        }
        this.out = () => {
            console.log("Imprime data mediante el screen");
        }
    }
}