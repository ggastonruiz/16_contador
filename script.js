//Guardar una variable el valor del contador
var contador = 0

// Mostrar el valor del contador en el HTML
function mostrar() {
    //capturar el html del contador
    document.querySelector(".contador")
    //actualizar el valor del contador
    .innerHTML = contador
    
}

//declarar funcion de sumar
function sumar() {
    contador = contador + 1
    mostrar()
}

//declarar funcion de resta
function restar() {  
    contador = contador - 1
    mostrar()
}

//reiniciar el contador
function reiniciar() {
    contador = 0
    mostrar()
}