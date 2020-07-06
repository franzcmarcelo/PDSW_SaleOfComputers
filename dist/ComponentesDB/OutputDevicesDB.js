import { Screen } from '../class/components/screen.js';
import { LaserPrinter } from '../class/components/laserPrinter.js';
import { InkjectPrinter } from '../class/components/inkjetPrinter.js';
let type = 'OutputDevice';
export let OutputDevicesDB = [
    new Screen('13', 'Screen', 'UIS1', 'Samsung', 2039, type),
    new Screen('14', 'Screen', 'UIS1', 'Samsung', 2039, type),
    new LaserPrinter('15', 'LaserPrinter', 'NSD2', 'Cannon', 564, type),
    new LaserPrinter('16', 'LaserPrinter', 'NSD2', 'Cannon', 564, type),
    new InkjectPrinter('17', 'InkjectPrinter', 'WVE9', 'HP', 623, type),
    new InkjectPrinter('18', 'InkjectPrinter', 'WVE9', 'HP', 623, type)
];
