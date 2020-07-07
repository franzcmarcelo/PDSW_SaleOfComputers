import { Computer } from './class/Computer.js'
import { Proforma } from './class/Proforma.js'
import { allDB } from './ComponentesDB/AllDB.js'

import { render } from './utils/render.js'

let computer = new Computer()
let proforma = new Proforma()
let IdsAddedComponents: String[] = [];

// HTML Elements
let $proforma = document.querySelector('#proforma') as HTMLDivElement;
let $TotalPrice = document.querySelector('#total') as HTMLSpanElement;
// Verify
let $BtnComprobar = document.querySelector('#BtnComprobar') as HTMLButtonElement;
$BtnComprobar.addEventListener('click',verify)
let $Modal_Content = document.querySelector('#Modal-Content') as HTMLDivElement;
let $Modal_Message = document.createElement('div') as HTMLDivElement;
$Modal_Message.classList.add('modal-body', 'text-center')

let $Modal_Image = document.querySelector('#Modal-Image') as HTMLDivElement;
let $Modal_Img = document.createElement('img') as HTMLImageElement;
$Modal_Img.classList.add('my-4','w-90px')
let $Modal_Btn = document.querySelector('#Modal-button') as HTMLButtonElement;

render()

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

function renderModal() {
    $Modal_Btn.classList.remove('btn-outline-danger')
    $Modal_Btn.classList.remove('btn-outline-success')
    if (computer.isValidate) {
        $Modal_Message.textContent='The minimum computer requirements WERE MET.';
        $Modal_Img.src='https://image.flaticon.com/icons/svg/391/391175.svg'
        $Modal_Btn.classList.add('btn-outline-success')
    }else{
        $Modal_Message.textContent='The minimum computer requirements WERE NOT MET.';
        $Modal_Img.src='https://image.flaticon.com/icons/svg/391/391116.svg'
        $Modal_Btn.classList.add('btn-outline-danger')
    }
    $Modal_Content.appendChild($Modal_Message)
    $Modal_Image.appendChild($Modal_Img)
}

function verify() {
    computer.iValidator()
    renderModal()
}
