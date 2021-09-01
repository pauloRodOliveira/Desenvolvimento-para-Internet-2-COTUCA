/* var quer dizer que a variável é local,
   se eu coloco ela dentro da function com var,
   ela não vai ser encontrada fora da função.
   mas se ela for declarada dentro da função, ela vai
   ser somente vista dentro da função.
   ESCOPO ABRANGENTE
*/
function calcula(){
    var raiz =  console.log("Digite qq valor = ");
    console.log(raiz);
}

/* const 
   o programa abaixo vai dar erro, pois não é possível mudar o valor de 
   uma const.
*/

const valor = 100;

function calculaConst(){
    valor = 200;
    console.log(raiz);
}

/* let
   pode ser utilizada em escopo de bloco, ou seja, somente pode ser 
   utilizada dentro de um bloco.
   O código abaixo vai dar erro, pois a variável declarada como let
   não pode ser acessada fora do escopo de bloco*/


    function calculaConst(){
        let valor = 200;
    }

console.log(valor);
