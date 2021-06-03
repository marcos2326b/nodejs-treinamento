const express = require ('express');

const app = express()

app.listen(3000,()=>console.log("servidor rodando no 3000"))

app.get(
    (request,response) =>{
        console.log("rota principal chamada")
        response.send('servidor rodando')
    }
)
