import { Component } from '../class/component.js'
// DadaBase
import { CPU_DB } from '../ComponentesDB/CPU_DB.js'
import { InputDevicesDB } from '../ComponentesDB/InputDevicesDB.js'
import { OutputDevicesDB } from '../ComponentesDB/OutputDevicesDB.js'
import { SpecialDevicesDB } from '../ComponentesDB/SpecialDevicesDB.js'
// Handles
import { addComponent } from '../index.js'

function renderCPUs(){
    let CPUs: Component[] = [...CPU_DB]
    let $itemsDP = document.querySelector('#itemsDP') as HTMLDivElement;
    for (const info of CPUs) {

        let card = document.createElement('div') as HTMLDivElement;
        card.classList.add('card', 'col-sm-4');
        card.style

        let car_body = document.createElement('div') as HTMLDivElement;
        car_body.classList.add('card-body');

        let card_title = document.createElement('h5') as HTMLHeadingElement;
        card_title.classList.add('card-title');
        card_title.style.fontSize='15px';
        card_title.textContent=`${info.name}: ${info.brand}-${info.model} / ${info.id}`;

        let img = document.createElement('img') as HTMLImageElement;
        img.classList.add('mb-2')
        img.style.width='90px';

        switch (info.brand) {
            case 'Asus':
                img.src= 'https://image.flaticon.com/icons/svg/900/900618.svg'
                break;
            case 'Ryzen':
                img.src= 'https://image.flaticon.com/icons/svg/993/993476.svg'
                break;
            default:
                break;
        }

        let card_price = document.createElement('p') as HTMLParagraphElement;
        card_price.classList.add('card-text');
        card_price.textContent=`S/.${info.price}`;

        let btnAdd = document.createElement('button') as HTMLButtonElement;
        btnAdd.classList.add('btn', 'btn-primary', 'btn-sm', 'mb-2')
        btnAdd.textContent='Add Proforma';
        btnAdd.setAttribute('identificador', info['id']);
        btnAdd.addEventListener('click', addComponent);

        car_body.appendChild(card_title);
        car_body.appendChild(img);
        car_body.appendChild(card_price);
        car_body.appendChild(btnAdd);
        card.appendChild(car_body);
        $itemsDP.appendChild(card);
    }
}

function renderInputDevices() {
    let InputDevices: Component[] = [...InputDevicesDB]
    let $itemsID = document.querySelector('#itemsID') as HTMLDivElement;

    for (const info of InputDevices) {
        let card = document.createElement('div') as HTMLDivElement;
        card.classList.add('card', 'col-sm-4');
        card.style

        let car_body = document.createElement('div') as HTMLDivElement;
        car_body.classList.add('card-body');

        let card_title = document.createElement('h5') as HTMLHeadingElement;
        card_title.classList.add('card-title');
        card_title.style.fontSize='15px';
        card_title.textContent=`${info.name}: ${info.brand}-${info.model} / ${info.id}`;

        let img = document.createElement('img') as HTMLImageElement;
        img.classList.add('mb-2')
        img.style.width='90px';
        switch (info.name) {
            case 'Keyboard':
                img.src= 'https://image.flaticon.com/icons/svg/3137/3137602.svg';
                break;
            case 'GraphicTablet':
                img.src= 'https://image.flaticon.com/icons/svg/3039/3039158.svg';
                break;
            case 'Mouse':
                // img.src= 'https://image.flaticon.com/icons/svg/847/847673.svg';
                img.src= 'https://image.flaticon.com/icons/svg/3069/3069161.svg';
                break;
            default:
                break;
        }

        let card_price = document.createElement('p') as HTMLParagraphElement;
        card_price.classList.add('card-text');
        card_price.textContent=`S/.${info.price}`;

        let btnAdd = document.createElement('button') as HTMLButtonElement;
        btnAdd.classList.add('btn', 'btn-primary', 'btn-sm', 'mb-2')
        btnAdd.textContent='Add Proforma';
        btnAdd.setAttribute('identificador', info['id']);
        btnAdd.addEventListener('click', addComponent);

        car_body.appendChild(card_title);
        car_body.appendChild(img);
        car_body.appendChild(card_price);
        car_body.appendChild(btnAdd);
        card.appendChild(car_body);
        $itemsID.appendChild(card);
    }
}

function renderOutputDevices() {
    let OutputDevices: Component[] = [...OutputDevicesDB]
    let $itemsOD = document.querySelector('#itemsOD') as HTMLDivElement;

    for (const info of OutputDevices) {
        let card = document.createElement('div') as HTMLDivElement;
        card.classList.add('card', 'col-sm-4');
        card.style

        let car_body = document.createElement('div') as HTMLDivElement;
        car_body.classList.add('card-body');

        let card_title = document.createElement('h5') as HTMLHeadingElement;
        card_title.classList.add('card-title');
        card_title.style.fontSize='15px';
        card_title.textContent=`${info.name}: ${info.brand}-${info.model} / ${info.id}`;

        let img = document.createElement('img') as HTMLImageElement;
        img.classList.add('mb-2')
        img.style.width='90px';
        switch (info.name) {
            case 'Screen':
                img.src= 'https://image.flaticon.com/icons/svg/3108/3108242.svg';
                break;
            case 'LaserPrinter':
                img.src= 'https://image.flaticon.com/icons/svg/2237/2237205.svg';
                break;
            case 'InkjectPrinter':
                img.src= 'https://image.flaticon.com/icons/svg/1497/1497695.svg';
                break;
            default:
                break;
        }

        let card_price = document.createElement('p') as HTMLParagraphElement;
        card_price.classList.add('card-text');
        card_price.textContent=`S/.${info.price}`;

        let btnAdd = document.createElement('button') as HTMLButtonElement;
        btnAdd.classList.add('btn', 'btn-primary', 'btn-sm', 'mb-2')
        btnAdd.textContent='Add Proforma';
        btnAdd.setAttribute('identificador', info['id']);
        btnAdd.addEventListener('click', addComponent);

        car_body.appendChild(card_title);
        car_body.appendChild(img);
        car_body.appendChild(card_price);
        car_body.appendChild(btnAdd);
        card.appendChild(car_body);
        $itemsOD.appendChild(card);
    }
}

function renderSpecialDevices() {
    let SpecialDevices: Component[] = [...SpecialDevicesDB]
    let $itemsSD = document.querySelector('#itemsSD') as HTMLDivElement;
    for (const info of SpecialDevices) {
        let card = document.createElement('div') as HTMLDivElement;
        card.classList.add('card', 'col-sm-4');
        card.style

        let car_body = document.createElement('div') as HTMLDivElement;
        car_body.classList.add('card-body');

        let card_title = document.createElement('h5') as HTMLHeadingElement;
        card_title.classList.add('card-title');
        card_title.style.fontSize='15px';
        card_title.textContent=`${info.name}: ${info.brand}-${info.model} / ${info.id}`;

        let img = document.createElement('img') as HTMLImageElement;
        img.classList.add('mb-2')
        img.style.width='90px';

        switch (info.brand) {
            case 'Apple':
                img.src= 'https://image.flaticon.com/icons/svg/644/644476.svg'
                break;
            case 'Samsung':
                img.src= 'https://image.flaticon.com/icons/svg/3137/3137613.svg'
                break;
            case 'Sony':
                img.src= 'https://image.flaticon.com/icons/svg/1530/1530457.svg'
                break;
            default:
                break;
        }

        let card_price = document.createElement('p') as HTMLParagraphElement;
        card_price.classList.add('card-text');
        card_price.textContent=`S/.${info.price}`;

        let btnAdd = document.createElement('button') as HTMLButtonElement;
        btnAdd.classList.add('btn', 'btn-primary', 'btn-sm', 'mb-2')
        btnAdd.textContent='Add Proforma';
        btnAdd.setAttribute('identificador', info['id']);
        btnAdd.addEventListener('click', addComponent);

        car_body.appendChild(card_title);
        car_body.appendChild(img);
        car_body.appendChild(card_price);
        car_body.appendChild(btnAdd);
        card.appendChild(car_body);
        $itemsSD.appendChild(card);
    }
}

export function render() {
    renderCPUs()
    renderInputDevices()
    renderOutputDevices()
    renderSpecialDevices()
}