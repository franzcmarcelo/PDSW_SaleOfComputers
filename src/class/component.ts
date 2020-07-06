export class Component {
    private _id: string;
    private _name: string;
    private _model: string;
    private _brand: string;
    private _price: number;
    private _type: string;
    constructor(id: string, name: string, model:string, brand: string, price:number, type:string) {
        this._id = id;
        this._name = name;
        this._model = model;
        this._brand = brand;
        this._price = price;
        this._type = type;
    }

    get id(): string{
        return this._id;
    }
    set id(id: string){
        this._id = id;
    }
    get name(): string{
        return this._name;
    }
    set name(name: string){
        this._name = name;
    }
    get model(): string{
        return this._model;
    }
    set model(model: string){
        this._model = model;
    }
    get brand(): string{
        return this._brand;
    }
    set brand(brand: string){
        this._brand = brand;
    }
    get price(): number{
        return this._price;
    }
    set price(price: number){
        this._price = price;
    }
    get type(): string{
        return this._type;
    }
    set type(type: string){
        this._type = type;
    }
}