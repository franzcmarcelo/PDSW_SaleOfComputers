export class Computer {
    constructor() {
        this.isValidate = false;
        this.componentsSelected = [];
        this.typeDP = [];
        this.typeID = [];
        this.typeOD = [];
        this.typeSD = [];
        this.iValidator = () => {
            this.countDevices();
            this.validator();
        };
    }
    validator() {
        this.isValidate = false;
        if (this.typeDP.length >= 1) {
            if (this.typeSD.length >= 1) {
                this.isValidate = true;
            }
            else {
                if (this.typeID.length >= 1 && this.typeOD.length >= 1) {
                    this.isValidate = true;
                }
            }
        }
    }
    countDevices() {
        this.typeDP = [];
        this.typeID = [];
        this.typeOD = [];
        this.typeSD = [];
        for (const component of this.componentsSelected) {
            switch (component.type) {
                case 'DataProcessor':
                    this.typeDP.push(component);
                    break;
                case 'InputDevice':
                    this.typeID.push(component);
                    break;
                case 'OutputDevice':
                    this.typeOD.push(component);
                    break;
                case 'SpecialDevice':
                    this.typeSD.push(component);
                    break;
                default:
                    break;
            }
        }
    }
    addComponent(component) {
        this.componentsSelected.push(component);
    }
    removeComponent(component) {
        let i = this.componentsSelected.indexOf(component);
        this.componentsSelected.splice(i, 1);
    }
    // Todos los componentes seleccionados para armar un Computer
    get componentsOfComputer() {
        return this.componentsSelected;
    }
}
