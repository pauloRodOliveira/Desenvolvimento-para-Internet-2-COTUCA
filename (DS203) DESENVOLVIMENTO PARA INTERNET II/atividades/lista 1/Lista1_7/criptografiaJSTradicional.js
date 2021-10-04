// classe CRIPTOGRAFIA

var criptografia = new Object();
// ATRIBUTOS
  criptografia.frase;

// CONSTRUTOR
function Criptografia(f)
{
    this.frase = f;
    // DECLARAÇÃO DOS METODOS FUNCIONAIS
    this.metodocripto1 = function() 
    {
        var fraseCriptografada = "";
        var digito = '';
        // método de simples troca. SOMENTE PARA MOSTRAR COMO PEGA DIGITO A DIGITO DA STRING
        for(var indice=0;indice<this.frase.length;indice++)
	    {
             digito = this.frase.charAt(indice);
             if (digito == "T")  fraseCriptografada += "@";
             else 
                if (digito == "U")  fraseCriptografada += "xpto";
                else
                  if (digito == "W")  fraseCriptografada += "123";
                  else fraseCriptografada += digito;
	    }

        return fraseCriptografada; 
    }
    this.metodocripto2 = function() 
    {
        var fraseCriptografada = "";
        // bolar uma outra criptografia
        fraseCriptografada = "T@xpto@@***";
        return fraseCriptografada; 
    }
}  

/***************************************************************************/
// FUNÇÕES JAVASCRIPT usada no HTML

function cliqueDoBotao(letra)
{  document.frmExe.txt_Frase.value += letra; }

function limpaCampo()
{  document.frmExe.txt_Frase.value = "";  }

function cripto1()
{  
   var frase = document.frmExe.txt_Frase.value;  
   var obj_criptografia = new Criptografia(frase);
   document.frmExe.txt_Frase.value = obj_criptografia.metodocripto1();  
}

function cripto2() 
{  
    var frase = document.frmExe.txt_Frase.value;  
    var obj_criptografia = new Criptografia(frase);
    document.frmExe.txt_Frase.value = obj_criptografia.metodocripto2();  
}
