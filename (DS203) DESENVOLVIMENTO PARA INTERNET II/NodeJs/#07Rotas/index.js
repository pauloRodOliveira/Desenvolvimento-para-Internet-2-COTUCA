//var express = require("express");
//var app = express();

const express = require("express");
const app = express(); // tudo que for do express, usar a variável app, pois ela, agora, tem os dados do express.

app.get("/", function(req, res){
  res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", function(req, res){
  res.sendFile(__dirname + "/html/sobre.html");
});

app.get("/blog", function(req, res){
  res.send("MEU BLOG");
});

app.get("/ola/:nome/:cargo", function(req, res){
  let nome = "";
  nome = req.params.nome;
  let cargo = "";
  cargo = req.params.cargo;
  res.send(nome + " " + cargo);
});

app.listen(3000, function(){
  console.log("servidor rodando na url http://localhost:3000");
}); // toda a programação deverá vir antes

/*
*MODELO SEM EXPRESS*

const http = require('http');

http.createServer(function(req, res) {
  res.end("Hello World! Welcome to
   my website");
}).listen(3000);
*/
