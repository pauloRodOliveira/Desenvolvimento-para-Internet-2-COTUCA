const express = require('express');
const app =  express();

//iniciando o servidor 
app.listen(3000, function(){
    console.log('Servidor rodando na porta 3000');
});