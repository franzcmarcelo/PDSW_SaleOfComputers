import { Component } from './class/component'
import { Computer } from './class/Computer.js'
import { Proforma } from './class/Proforma.js'
import { allDB } from './ComponentesDB/AllDB.js'


import { render } from './utils/render.js'

let computer = new Computer()
let proforma = new Proforma()
let IdsAddedComponents: String[] = [];

render()

let $proforma = document.querySelector('#proforma') as HTMLDivElement;
let $TotalPrice = document.querySelector('#total') as HTMLSpanElement;
let $BtnComprobar = document.querySelector('#BtnComprobar') as HTMLButtonElement;

function renderProforma() {
    // Id de los componentes renderizados en proforma:
    console.log(IdsAddedComponents);

    $proforma.textContent = '';
    for (const component of computer.componentsOfComputer) {
        let itemProforma = document.createElement('li') as HTMLLIElement;
        itemProforma.classList.add('list-group-item', 'text-right', 'mx-2');
        itemProforma.textContent= `${component.name}-${component.brand}: S/.${component.price}.00`;

        let btnDelete = document.createElement('button')
        btnDelete.classList.add('btn', 'btn-danger')
        btnDelete.textContent = 'X'
        btnDelete.style.marginLeft = '1rem'
        btnDelete.setAttribute('identificador', `${component.id}`)
        btnDelete.addEventListener('click', deleteComponent)

        itemProforma.appendChild(btnDelete)
        $proforma.appendChild(itemProforma);
    }

    // Calculando el Precio Total
    proforma.calculatorPrice(computer.componentsOfComputer)
    $TotalPrice.textContent =`${proforma.FinalPrice}`;
}

function deleteComponent(this: HTMLButtonElement) {
    let id = this.getAttribute('identificador')
    let idNotNull = id ? id : ''
    let IdNumber = Number.parseInt(idNotNull)
    for (const IDs of IdsAddedComponents) {
        if (IDs === idNotNull) {
            let index = IdsAddedComponents.indexOf(IDs)
            // Removemos del array de puros id
            IdsAddedComponents.splice(index, 1)
            // Removemos el componente de computer
            // Componente Removido: allDB[id-1]
            computer.removeComponent(allDB[IdNumber-1])
        }
    }
    renderProforma()
}

export function addComponent(this: HTMLButtonElement) {
    // > typeOf(id) = String
    let id = this.getAttribute('identificador')

    let idNotNull = id ? id : ''

    // Agregamos al array de puros id, recibe un String
    IdsAddedComponents.push(idNotNull)

    // Agregamos el componente a computer
    // Componente Agregado: allDB[id-1]
    let IdNumber = Number.parseInt(idNotNull)
    computer.addComponent(allDB[IdNumber-1])
    renderProforma()
}

// computer.componentsOfComputer:
// Devuelve los componentes seleccionados (los que se renderizan en proforma)

$BtnComprobar.addEventListener('click',verify)
function verify() {
    computer.countDevices()
    computer.iValidator()
}

