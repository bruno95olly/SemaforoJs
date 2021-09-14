const sinal = document.getElementById("sinal")
let idInterval

function sinalVermelho(){
    sinal.src = "img/vermelho.png"
    pararPiscar()
}

function sinalAmarelo(){
    sinal.src = "img/amarelo.png"
    pararPiscar()
}

function sinalVerde(){
    sinal.src = "img/verde.png"
    pararPiscar()

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

function pararPiscar(){
    clearInterval (idInterval)
}

function trocarSinal(){
    if(sinal.src.includes("desligado")){
        sinal.src =  "img/vermelho.png"
    }
    else if(sinal.src.includes("vermelho")){
        sinal.src =  "img/amarelo.png"
    }
    else if(sinal.src.includes("amarelo")){
        sinal.src =  "img/verde.png"
    }
    else{
        sinal.src =  "img/vermelho.png"
    }
}

function automaticoInterval(){
    const piscar = document.getElementById("automatico")
    if(piscar.textContent == "Automatico"){
        idInterval = setInterval (trocarSinal, 1000)
        piscar.textContent = "Parar"
    }
    else{
        pararPiscar()
        piscar.textContent = "Automatico"
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
    .addEventListener("click", automaticoInterval)

