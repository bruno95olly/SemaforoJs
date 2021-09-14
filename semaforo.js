const sinal = document.getElementById("sinal")
let idTimeout

function sinalVermelho(){
    sinal.src = "img/vermelho.png"
}

function sinalAmarelo(){
    sinal.src = "img/amarelo.png"
}

function sinalVerde(){
    sinal.src = "img/verde.png"
}


function pararPiscar(){
    clearTimeout(idTimeout)
}

function automaticoTimeout(){
    var interval = 0
    var contador = 0

    while(contador<10000){
        interval += 800; setTimeout(sinalVermelho, interval);
        interval += 800; setTimeout(sinalAmarelo, interval);
        interval += 800; setTimeout(sinalVerde, interval);
        
        contador++;
        
    }
    
}






// Eventos
document.getElementById("vermelho")
    .addEventListener("click", sinalVermelho)

document.getElementById("amarelo")
    .addEventListener("click", sinalAmarelo)

document.getElementById("verde")
    .addEventListener("click", sinalVerde)

document.getElementById("automatico")
    .addEventListener("click", automaticoTimeout)

