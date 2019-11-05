function reemplazar(){
var texto = document.getElementById("texto").innerHTML;
var frase = document.getElementById("frase").value;
var fraseReemplazada = document.getElementById("fraseReemplazada").value;

var textoReemplazado=texto.replace(frase,fraseReemplazada);

        //document.write(textoReemplazado);
     
        document.getElementById("texto").innerHTML=textoReemplazado;

}
