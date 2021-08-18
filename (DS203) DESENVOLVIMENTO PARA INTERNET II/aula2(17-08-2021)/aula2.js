//script>
let nome = "Márcia Tognetti";

// if(meuNome = "")
//    var liberacaoAcesso = "Acesso negado!";
// else
//    var liberacaoAcesso = "Acesso liberado! " + meuNome;
let liberacaoAcesso;

liberacaoAcesso = (meuNome ? `Acesso liberado, Sr/Sra ${meuNome}` : "Acesso negado");

console.log(liberacaoAcesso);

function Saudacao(){
   horario = System.now();
   console.log(horario);
}
//script>