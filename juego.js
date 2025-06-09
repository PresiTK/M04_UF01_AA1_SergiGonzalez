let min = 1;
let max  =100;
let att = 0;
let rand = Math.floor(Math.random() * (max - min + 1)) + min;
let text = "";
function verifynum() {
    let valor = parseInt(document.getElementById("numjuego").value);
    let result= document.getElementById("resultado");
    let intentosDisplay = document.getElementById("intentos");
    let boton = document.getElementById("endivina");

    if (isNaN(valor)) {
        result.innerText = "Numero invalido.";
        return;
    }

    if (valor < min||valor > max) {
        result.innerText = "El numero tiene que ser entre 1 a 100";
        return;
    }

    att++;
    intentosDisplay.innerText = `Intentos: ${att}`;
    
    if (valor > rand) {
        text = "Menor que: " + valor + ".";
    } else if (valor < rand) {
        text = "Mayor que" + valor + ".";
    } else {
        if(valor==33){
            text = "Lo has Adivinado, pero y ese numerin? como que 33?";
            boton.disabled = true;
        }else{
            text = "Lo has Adivinado";
            boton.disabled = true;  
        }
    }
    result.innerText = text;
}