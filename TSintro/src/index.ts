/*
    ===== Código de TypeScript =====
*/

function add (x:number, n:number)
{
    return x+n;
}

const arrowAdd = (a:number, b:number):number =>{
    return a+b;
}

function multiply (num:number, other?:number, base:number=2):number
{
    return num*base;
}

interface ApexCharacter {
    nombre: string;
    pv:number;
    showHp: ()=>void;
}

function heal(character:ApexCharacter, healing:number):void
{
    character.pv += healing;
}

//Declaración de objeto que hereda una interfaz
const newCharacter:ApexCharacter={
    nombre:"Wraith",
    pv: 100,
    showHp()
    {
        console.log('La vida es: '+ this.pv)
    }
}

heal(newCharacter, 25);