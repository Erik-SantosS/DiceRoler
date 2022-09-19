function jogaNum(num) {
   var numero = parseInt(Math.random() * num + 1);
   return numero;
}

function funcao() {
    if(document.getElementById("radio-d4").checked){
        document.getElementById("numresult").innerHTML = jogaNum(4);
    }else if(document.getElementById("radio-d6").checked){
        document.getElementById("numresult").innerHTML = jogaNum(6);
    }else if(document.getElementById("radio-d8").checked){
        document.getElementById("numresult").innerHTML = jogaNum(8);
    }else if(document.getElementById("radio-d10").checked){
        document.getElementById("numresult").innerHTML = jogaNum(10);
    }else if(document.getElementById("radio-d12").checked){
        document.getElementById("numresult").innerHTML = jogaNum(12);
    }else if(document.getElementById("radio-d20").checked){
        document.getElementById("numresult").innerHTML = jogaNum(20);
    }else if(document.getElementById("radio-d100").checked){
        document.getElementById("numresult").innerHTML = jogaNum(100);
    }
}