const express = require('express');

//creación de servidor/app express
const app = express();

//Routes
app.use( '/api/auth', require('./routes/auth') );

app.listen(4000, () =>{
    console.log(`Server running in port ${ 4000 }`)
});