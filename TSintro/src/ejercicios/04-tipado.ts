/*
    ===== Código de TypeScript =====
*/

interface SuperHero{
    name: string;
    age: number;
    adress: Adress;
    showAdress: ()=>string;
}

interface Adress{
    location:string;
    country:string;
    city:string;
}

const superHero: SuperHero = {
    name: 'IronMan',
    age: 45,
    adress: {
        location: '10880 Malibu Point, 90265',
        country: 'USA',
        city: 'California'
    }, 
    showAdress()
    {
        return this.name + ', ' + this.adress.city + ', ' + this.adress.country;
    }
}

const adress = superHero.showAdress();
console.log(adress);