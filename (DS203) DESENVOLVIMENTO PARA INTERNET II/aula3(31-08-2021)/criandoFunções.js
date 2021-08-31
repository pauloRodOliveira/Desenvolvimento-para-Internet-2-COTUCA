/* Função estática */
function calculaMediaAluno(n1, n2, n3, n4){
    return (n1 + n2 + n3 + n4)/4;
}

/* função expressão */

var calculaMedia = function calculaMediaAluno(n1, n2, n3, n4){
    return (n1 + n2 + n3 + n4)/4;
}

/* Função Arrow (A melhor opção) */
// Forma completa
var soma = function(num1, num2){
    return num1 + num2;
}

//Forma reduzida
var soma = (num1, num2) => {
    return num1 + num2;
}

//Forma irredutível
var soma = (num1, num2) => {num1 + num2; }