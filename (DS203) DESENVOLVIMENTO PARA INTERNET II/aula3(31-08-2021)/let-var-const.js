/* var quer dizer que a variável é local,
   se eu coloco ela dentro da function com var,
   ela não vai ser encontrada fora da função.
   mas se ela for declarada dentro da função, ela vai
   ser somente vista dentro da função.
*/
function raizQuadrada(){
    var raiz =  console.log("Digite qq valor = ");
    console.log(raiz);
}

/* const 
   o programa abaixo vai dar erro, pois não é possível mudar o valor de 
   uma const.
*/

const valor = 100;

function raizQuadrada(){
    valor = 200;
    console.log(raiz);
}
