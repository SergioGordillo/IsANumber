
function validar() {


    let texto = document.getElementById("texto").value;
    let output= document.getElementById("output"); 
    var reg=new RegExp("^[0-9]+$");
    let resultado="";  

    if(texto.match(reg)){
        resultado+="El formato es válido, es un número";
        output.innerHTML=resultado; 
    } else {
        resultado+="El formato no es válido, no es un número"; 
        output.innerHTML=resultado; 
    }



}

