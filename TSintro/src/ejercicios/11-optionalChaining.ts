/*
    ===== Código de TypeScript =====
*/

interface Passenger {
    name: string;
    children?: string[]
}

const passenger1: Passenger = {
    name: 'Charles'
}

const passenger2 : Passenger = {
    name: 'Michael',
    children: ['Mick', 'Gina']
}

function printChildren (passenger: Passenger): void {
    const howMany =passenger.children?.length || 'Sin hijos';

    console.log (howMany);
}

printChildren(passenger1);