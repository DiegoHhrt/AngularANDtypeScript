import { Product, calculaISV } from './ejercicios/06-desestrucArgumentos';

/*
    ===== Código de TypeScript =====
*/



const shoppingCart: Product[]=[
    {
        desc: 'phone1',
        price: 350,
    },
    {
        desc: 'phone2',
        price: 400,
    },
];

const [total, isv] = calculaISV(shoppingCart);

console.log('Total: ' + total);
console.log('ISV: ' + isv);
