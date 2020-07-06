import { Component } from '../class/component.js';
import { TouchScreen } from '../class/components/touchScreen.js'

let type: string = 'SpecialDevice';

export let SpecialDevicesDB: Component[] = [
    new TouchScreen('19', 'TouchScreen', 'JBS3', 'Apple', 4762, type),
    new TouchScreen('20', 'TouchScreen', 'JBS3', 'Apple', 4762, type),
    new TouchScreen('21', 'TouchScreen', 'JBS3', 'Samsung', 3893, type),
    new TouchScreen('22', 'TouchScreen', 'JBS3', 'Samsung', 3893, type),
    new TouchScreen('23', 'TouchScreen', 'JBS3', 'Sony', 4129, type),
    new TouchScreen('24', 'TouchScreen', 'JBS3', 'Sony', 4129, type)
]

