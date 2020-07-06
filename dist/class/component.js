export class Component {
    constructor(id, name, model, brand, price, type) {
        this._id = id;
        this._name = name;
        this._model = model;
        this._brand = brand;
        this._price = price;
        this._type = type;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get model() {
        return this._model;
    }
    set model(model) {
        this._model = model;
    }
    get brand() {
        return this._brand;
    }
    set brand(brand) {
        this._brand = brand;
    }
    get price() {
        return this._price;
    }
    set price(price) {
        this._price = price;
    }
    get type() {
        return this._type;
    }
    set type(type) {
        this._type = type;
    }
}
