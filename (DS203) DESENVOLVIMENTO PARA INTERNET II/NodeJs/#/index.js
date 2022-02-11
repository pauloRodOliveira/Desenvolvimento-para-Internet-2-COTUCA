const express = require("express");
var app = express(); 
const Sequelize = require('sequelize');
const handlebars = require("express-handlebars");

//Config
  //Template Engine
  const hbs = handlebars.create({
      defaultLayout: 'main'
  })
  app.engine('handlebars',() => hbs)
  app.set('view engine', 'handlebars')
  app.set('views', './views')

  //Conexão com o banco de dados
    const sequelize = new Sequelize('sistemadecadastro', 'root', '2910', {
      host: "localhost",
      dialect: 'mysql'
    });
    sequelize.authenticate().then(function(){
      console.log("Conectado com sucesso");
    }).catch(function(erro){
      console.log("Falha ao se conectar: " + erro);
    });

  //Rotas
    app.get('/cadastro', function(req,res){
      //res.render(__dirname + "/views/formulario.handlebars")
      res.render("../views/formulario");
    });

    app.get('/', function(req,res){
      //res.render(__dirname + "/views/formulario.handlebars")
      res.render("../views/formulario");
    });

const PORTA = 4000
app.listen(PORTA, function(){
  console.log(`servidor rodando na url http://localhost:${PORTA}`);
}); // toda a programação deverá vir antes


