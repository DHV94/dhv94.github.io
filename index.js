function siguienteDiapositiva1() {
    document.getElementById("caja").style.zIndex = 0
    document.getElementById("caja2").style.zIndex = 1
}

function siguienteDiapositiva2() {
    document.getElementById("caja2").style.zIndex = 0
    document.getElementById("caja3").style.zIndex = 1
}

function siguienteDiapositiva3() {
    document.getElementById("caja3").style.zIndex = 0
    document.getElementById("caja4").style.zIndex = 1
}

function anteriorDiapositiva2() {
    document.getElementById("caja").style.zIndex = 1
    document.getElementById("caja2").style.zIndex = 0
}

function anteriorDiapositiva3() {
    document.getElementById("caja2").style.zIndex = 1
    document.getElementById("caja3").style.zIndex = 0
}

function anteriorDiapositiva4() {
    document.getElementById("caja3").style.zIndex = 1
    document.getElementById("caja4").style.zIndex = 0
}


