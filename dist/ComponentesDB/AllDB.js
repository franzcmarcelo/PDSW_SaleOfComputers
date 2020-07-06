import { CPU_DB } from '../ComponentesDB/CPU_DB.js';
import { InputDevicesDB } from '../ComponentesDB/InputDevicesDB.js';
import { OutputDevicesDB } from '../ComponentesDB/OutputDevicesDB.js';
import { SpecialDevicesDB } from '../ComponentesDB/SpecialDevicesDB.js';
export let allDB = [
    ...CPU_DB,
    ...InputDevicesDB,
    ...OutputDevicesDB,
    ...SpecialDevicesDB
];
