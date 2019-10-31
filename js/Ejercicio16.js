function validar(){

var frase = document.getElementById("frase").value;
var fraseError = document.getElementById("textoError");
var expreFrase = /^[A-Z][a-zñáóéíú]+\.$/;

    if(expreFrase.test(frase)){
        fraseError.innerHTML = "Correcto";
        fraseError.style.color = "green";
    }else{
        fraseError.innerHTML = "Texto introduccido mal";
        fraseError.style.color = "red";
    }

var tlf = document.getElementById("telefono").value;
var teleError = document.getElementById("telError");
var expreTlf = /^[\d]{3}[-]*([\d]{2}[-]*){2}[\d]{2}$/;

    if(expreTlf.test(tlf)){
        teleError.innerHTML = "Correcto";
        teleError.style.color = "green";
    }else{
        teleError.innerHTML = "Telefono mal puesto";
        teleError.style.color = "red";
    }

var tlfInter = document.getElementById("telefonoInter").value;
var teleInterError = document.getElementById("telInterError");
var expreTlfInter = /^\(([\+|00]\d{1,3})\)[\d]{3}[-]*([\d]{2}[-]*){2}[\d]{2}$/;

    if(expreTlfInter.test(tlfInter)){
        teleInterError.innerHTML = "Correcto";
        teleInterError.style.color = "green";
    }else{
        teleInterError.innerHTML = "Telefono internacional mal puesto";
        teleInterError.style.color = "red";
    }

var fecha = document.getElementById("fecha").value;
var fechaEror = document.getElementById("fechaError");
var expreFecha = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}\s[0-9]{2}:[0-9]{2}$/;

    if(expreFecha.test(fecha)){
        fechaEror.innerHTML = "Correcto";
        fechaEror.style.color = "green";
    }else{
        fechaEror.innerHTML = "Fecha con formato incorrecto";
        fechaEror.style.color = "red";
    }

var postal = document.getElementById("postal").value;
var postalError = document.getElementById("postalError");
var exprePostal = /^[0-9]{5}$/;

    if(exprePostal.test(postal)){
        postalError.innerHTML = "Correcto";
        postalError.style.color = "green";
    }else{ 
        postalError.innerHTML = "Codigo Postal erroneo";
        postalError.style.color = "red";
    }

var email = document.getElementById("email").value;
var emailError = document.getElementById("emailError");
var expreEmail = /^[a-z_][_a-z0-9-]*(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[com|es|net|info])$/;

    if(expreEmail.test(email)){
        emailError.innerHTML = "Correcto";
        emailError.style.color = "green";
    }else{
        emailError.innerHTML = "Email mal puesto";
        emailError.style.color = "red";
    }

var real = document.getElementById("real").value;
var realError = document.getElementById("realError");
var expreReal = /^(((-?[1-9]([0-9])*))((\.|,)[0-9]+)?)|^(-?0(\.|,)[0-9]+)|^(0)$/;

    if(expreReal.test(real)){
        realError.innerHTML = "Correcto";
        realError.style.color = "green";
    }else{
        realError.innerHTML = "Numero real mal puesto";
        realError.style.color = "red";
    }

var cuenta = document.getElementById("cuenta").value;
var cuentaError = document.getElementById("cuentaError");
var expreCuenta = /^[0-9]{4}\s[0-9]{4}\s[0-9]{2}\s[0-9]{10}$/;

    if(expreCuenta.test(cuenta)){
        cuentaError.innerHTML = "Correcto";
        cuentaError.style.color = "green";
    }else{
        cuentaError.innerHTML = "Numero de cuenta mal puesto";
        cuentaError.style.color = "red";
    }

var dominio = document.getElementById("dominio").value;
var dominioError = document.getElementById("dominioError");
var expreDominio = /^[w]{3}\.[A-Za-z]+\.(es|com)$/;

    if(expreDominio.test(dominio)){
        dominioError.innerHTML = "Correcto";
        dominioError.style.color = "green";
    }else{
        dominioError.innerHTML = "Error de dominio";
        dominioError.style.color = "red";
    }

var url = document.getElementById("url").value;
var urlError = document.getElementById("urlError");
var expreUrl = /^(http):\/\/[w]{3}\.[A-Za-z]+\.(es|com)(:(\d{2,5}))?$/;

    if(expreUrl.test(url)){
        urlError.innerHTML = "Correcto";
        urlError.style.color = "green";
    }else{
        urlError.innerHTML = "Error en la URL";
        urlError.style.color = "red";
    }

var url2 = document.getElementById("url2").value;
var url2Error = document.getElementById("url2Error");
var expreUrl2 = /[http]:\/\/[w]{3}.[A-Za-z]+.es|com:(80)\?[A-Za-z]+=.*(&[A-Za-z]+=.*)*/;
    
    if(expreUrl2.test(url2)){
       url2Error.innerHTML = "Correcto";
       url2Error.style.color = "green";
    }else{
        url2Error.innerHTML = "Error en la URL";
        url2Error.style.color = "red";
    }
}