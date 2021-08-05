/*
    ===== Código de TypeScript =====
*/

interface Product{
    desc: string;
    price: number;
}

const phone: Product = {
    desc: "Redmi Note 9S",
    price: 5600,
}

const tablet: Product = {
    desc: "Samsung Galaxy Tab 10",
    price: 12400,
}

function calculaISV (products:Product[]):[number, number]
{
    let total=0;

    products.forEach(( {price} ) => {
        total += price;
    })
    return [total, total*0.15];
}

const electronics = [phone, tablet];

const [total, isv] = calculaISV(electronics);

console.log('ISV: ' + isv);
console.log('Total: ' + total);