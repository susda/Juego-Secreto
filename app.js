// Primer juego JavaScript


let numeroSecreto = 0; 
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10; //

console.log(numeroSecreto);

function asignarTextoElemento(elemento,  texto){

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; // Para asignar texto en HTML
    return; // No es obligacion que una funcion retorne algo, pero por buenas practicas es mejor que vaya el return


}
function verificarIntento() { // De esta manera llamamos la funcion que pusimos en el index.html
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);//value: atributo // para poner mas input, debemos poner en el codigo de html un identificador llamado "id="
    // Usamos el console.log() para comprobar que esta funcionando correctamente
    // console.log(numeroDeUsuario === numeroSecreto); // retorna un boolean y podemos comparar el tipo de datos con el (===)
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`); // Dentro de una funcion estamos llamando otra funcion. Esto nos indica lo potente que es JavaScript
    
        //VAMOS A QUITAR EL DESABLED DEL BOTON NUEVO JUEGO
        document.getElementById("reiniciar").removeAttribute("disabled");
    
    } else {     
        // El usuario no acerto                                                                                               // Uso del operador terniario
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El numero secreto es menor");
        } else {
            asignarTextoElemento("p", "El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja(); // Las funciones siempre deben llevar los aprentesis al final
    }
    return;
}

function limpiarCaja() {

//FORMA 2

    document.querySelector("#valorUsuario").value = "";
}
     //Forma 2 -> Mirar en apuntes.
    let valorCaja = document.querySelector("#valorUsuario"); // Para los "id" ponemos al inciio el simbolo de numeral
    valorCaja.value = ''; // para que despues de no acertar la caja quede vacia
  


//Poder retornar un valor con una funcion

function geneerarNumeroSecreto() { 
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; // De esta manera no necesito crear una variable, porque ya esta creada por fuera del bloque de la funcion
    //Si el numero esta generado, hacemos una nueva operacion, sino, aplicamos el numero nuevo.
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    // Si ya sorteamos todos los numeros
    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "ya se sortearon todos los elementos posibles");
    } else {
    // Si el numero generado esta incluido en la lista


        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return geneerarNumeroSecreto(); // Recursividad - entonces volvemos a llamar la funciäon.
        } else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado

        }  
}   }

function condicionesIniciales(){
   
    asignarTextoElemento("h1", "Juego del numero secreto");//de esta manera podemos llamar la funcion
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`); //Usando las funciones ahorramos texto y mejoramos el estilo
    numeroSecreto = geneerarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego() {
    //Limpiar al caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //generar el numero aleatorio
    
    //Inicializar el numero de intentos
    
    //Deshabilitar el boton de "nuevo juego"
    document.querySelector("#reiniciar").setAttribute("disabled", "true");

  }

condicionesIniciales();


asignarTextoElemento("h1", "Juego del numero secreto");//de esta manera podemos llamar la funcion
asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`); //Usando las funciones ahorramos texto y mejoramos el estilo

