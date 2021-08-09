/*
    ===== Código de TypeScript =====
*/
class NormalPerson {
    constructor(public name: string,
         public adress: string
    ){}
}
class Hero extends NormalPerson {
    constructor(
        public alterEgo:string,
        public age:number,
        public realName:string   
    ){
        super( realName, 'ubication');
    }

}

const batman = new Hero('Bat-Man', 34, 'Bruce Wayne');

console.log(batman);