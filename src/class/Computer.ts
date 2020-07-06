import { Component } from './component.js'
import { iValidator } from '../interfaces/iValidator.js'

export class Computer implements iValidator{

    iValidator: Function;
    isValidate: boolean = false;
    componentsSelected: Component[] = [];
    typeDP: Array<Component> = [];
    typeID: Array<Component> = [];
    typeOD: Array<Component> = [];
    typeSD: Array<Component> = [];

    constructor(){
        this.iValidator = () => {
            this.validator()
        }
    }

    validator(){
        this.isValidate=false;
        if (this.typeDP.length>=1) {
            if (this.typeSD.length>=1) {
                console.log('Correcto!');
                this.isValidate=true;
            }else{
                if (this.typeID.length>=1 && this.typeOD.length>=1) {
                    console.log('Correcto');
                    this.isValidate=true;
                }
                else{
                    console.log('Mal');
                }
            }
        }
        else{
            console.log('Mal');
        }
    }

    countDevices(){
        this.typeDP = []
        this.typeID = []
        this.typeOD = []
        this.typeSD = []
        for (const component of this.componentsSelected) {
            switch (component.type) {
                case 'DataProcessor':
                    this.typeDP.push(component)
                    break;
                case 'InputDevice':
                    this.typeID.push(component)
                    break;
                case 'OutputDevice':
                    this.typeOD.push(component)
                    break;
                case 'SpecialDevice':
                    this.typeSD.push(component)
                    break;
                default:
                    break;
            }
        }
    }

    addComponent(component: Component){
        this.componentsSelected.push(component)
    }

    removeComponent(component: Component){
        let i = this.componentsSelected.indexOf(component)
        this.componentsSelected.splice(i, 1)
    }

    get componentsOfComputer(): Component[]{
        return this.componentsSelected;
    }

}