import comienzaTiempo from "./cronometro.js";

let matchQuantity = [];
let ganador = (lasTarjetas) => {
    console.log("ganadora");
    lasTarjetas.forEach((elemento)=>{
        elemento.classList.add("ganadora");
        matchQuantity++;
        
        if(matchQuantity === 4) {
        clearInterval();

        document.getElementById("pageTwo").style.display = "block";
        document.getElementById("finalGanador").style.display = "block";
        var audio = document.getElementById("audioGanador");
        audio.play();
        }
    })

}

export default ganador; 