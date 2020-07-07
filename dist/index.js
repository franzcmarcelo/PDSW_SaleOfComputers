import { Computer } from './class/Computer.js';
import { Proforma } from './class/ShoppingCart.js';
import { allDB } from './ComponentesDB/AllDB.js';
import { render } from './utils/render.js';
let computer = new Computer();
let proforma = new Proforma();
let IdsAddedComponents = [];
// HTML Elements
let $proforma = document.querySelector('#proforma');
let $TotalPrice = document.querySelector('#total');
// Verify
let $BtnComprobar = document.querySelector('#BtnComprobar');
$BtnComprobar.addEventListener('click', verify);
let $Modal_Content = document.querySelector('#Modal-Content');
let $Modal_Message = document.createElement('div');
$Modal_Message.classList.add('modal-body', 'text-center');
let $Modal_Image = document.querySelector('#Modal-Image');
let $Modal_Img = document.createElement('img');
$Modal_Img.classList.add('my-4', 'w-90px');
let $Modal_Btn = document.querySelector('#Modal-button');
render();
function renderShoppingCart() {
    // Id de los componentes renderizados en shoppingCart:
    console.log(IdsAddedComponents);
    $proforma.textContent = '';
    for (const component of computer.componentsOfComputer) {
        let itemProforma = document.createElement('li');
        itemProforma.classList.add('list-group-item', 'text-right', 'mx-2');
        itemProforma.textContent = `${component.name}-${component.brand}: S/.${component.price}.00`;
        let btnDelete = document.createElement('button');
        btnDelete.classList.add('btn', 'btn-danger');
        btnDelete.textContent = 'X';
        btnDelete.style.marginLeft = '1rem';
        btnDelete.setAttribute('identificador', `${component.id}`);
        btnDelete.addEventListener('click', deleteComponent);
        itemProforma.appendChild(btnDelete);
        $proforma.appendChild(itemProforma);
    }
    // Calculando el Precio Total
    proforma.calculatorPrice(computer.componentsOfComputer);
    $TotalPrice.textContent = `${proforma.FinalPrice}`;
}
function deleteComponent() {
    let id = this.getAttribute('identificador');
    let idNotNull = id ? id : '';
    let IdNumber = Number.parseInt(idNotNull);
    for (const IDs of IdsAddedComponents) {
        if (IDs === idNotNull) {
            let index = IdsAddedComponents.indexOf(IDs);
            // Removemos del array de puros id
            IdsAddedComponents.splice(index, 1);
            // Removemos el componente de computer
            // Componente Removido: allDB[id-1]
            computer.removeComponent(allDB[IdNumber - 1]);
        }
    }
    renderShoppingCart();
}
export function addComponent() {
    // > typeOf(id) = String
    let id = this.getAttribute('identificador');
    let idNotNull = id ? id : '';
    // Agregamos al array de puros id, recibe un String
    IdsAddedComponents.push(idNotNull);
    // Agregamos el componente a computer
    // Componente Agregado: allDB[id-1]
    let IdNumber = Number.parseInt(idNotNull);
    computer.addComponent(allDB[IdNumber - 1]);
    renderShoppingCart();
}
function renderModal() {
    $Modal_Btn.classList.remove('btn-outline-danger');
    $Modal_Btn.classList.remove('btn-outline-success');
    $Modal_Btn.textContent = '';
    if (computer.isValidate) {
        $Modal_Message.textContent = 'The minimum computer requirements WERE MET.';
        $Modal_Img.src = 'https://image.flaticon.com/icons/svg/391/391175.svg';
        $Modal_Btn.classList.add('btn-outline-success');
        $Modal_Btn.textContent = 'Comprar';
    }
    else {
        $Modal_Message.textContent = 'The minimum computer requirements WERE NOT MET.';
        $Modal_Img.src = 'https://image.flaticon.com/icons/svg/391/391116.svg';
        $Modal_Btn.classList.add('btn-outline-danger');
        $Modal_Btn.textContent = 'Corregir';
    }
    $Modal_Content.appendChild($Modal_Message);
    $Modal_Image.appendChild($Modal_Img);
}
function verify() {
    computer.iValidator();
    renderModal();
}
