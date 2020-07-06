import { Component } from '../class/component.js'
import { GraphicTablet } from '../class/components/graphicTablet.js'
import { Keyboard } from '../class/components/keyboard.js'
import { Mouse } from '../class/components/mouse.js'

let type: string = 'InputDevice';

export let InputDevicesDB: Component[] = [
    new GraphicTablet('7', 'GraphicTablet', 'SDV9', 'Lenovo', 2398, type),
    new GraphicTablet('8', 'GraphicTablet', 'SDV9', 'Lenovo', 2398, type),
    new Keyboard('9', 'Keyboard', 'ISD3', 'Ryzen', 239, type),
    new Keyboard('10', 'Keyboard', 'ISD3', 'Ryzen', 239, type),
    new Mouse('11', 'Mouse', 'SDC0', 'LogicTech', 93, type),
    new Mouse('12', 'Mouse', 'SDC0', 'LogicTech', 93, type)
]
