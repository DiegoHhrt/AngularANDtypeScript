/*
    ===== Código de TypeScript =====
*/

//Array
let habilities: string[] = [];

//Objects

interface Personaje {
    nombre: string;
    hp: number;
    habilities: string[];
    originTown?: string;
}

const character: Personaje = {
    nombre: 'Sam',
    hp: 100,
    habilities: ['Bash', 'Counter', 'Healing']
}

character.originTown = "Gotham";

console.table(character);