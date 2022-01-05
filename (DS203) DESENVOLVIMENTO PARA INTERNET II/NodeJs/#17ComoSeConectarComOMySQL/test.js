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

const Postagem = sequelize.define('postagem', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
});

Postagem.create({
    titulo: "TESTE",
    conteudo: "testando o insert dentro do mysql sendo feito pelo nodejs"
})

//Postagem.sync({force: true})