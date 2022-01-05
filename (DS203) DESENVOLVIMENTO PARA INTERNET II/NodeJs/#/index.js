const express = require("express");
const app = express(); 
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');

//Config
  //Template Engine
    app.engine('handlebars', handlebars({defaultLayout:'main'}));
    app.set('view engine', 'handlebars');
  //Conexão com o banco de dados
  const Sequelize = require('sequelize')
  const sequelize = new Sequelize('sistemadecadastro', 'root', '2910', {
    host: "localhost",
    dialect: 'mysql'
  });
  sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso");
  }).catch(function(erro){
    console.log("Falha ao se conectar: " + erro);
  });

app.listen(3000, function(){
  console.log("servidor rodando na url http://localhost:3000");
}); // toda a programação deverá vir antes
