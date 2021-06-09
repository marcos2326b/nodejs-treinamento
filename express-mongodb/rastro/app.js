const express = require ('express');

const consign = require('consign');


const app = express()
app.use(express.json());
app.use(express.urlencoded({extended:true}));

consign()
.include('constantes')
.then('model')
.then('controller')
.then('routes')
.into(app);

app.constantes.db.connection
app.constantes.db.connectionParams

app.listen(3000,()=>console.log("servidor rodando no 3000"))