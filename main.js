// Formas de inicializar variables

var a ; // Declaracion
var b = "b"; // Declarar y asignar

b = "c"; // REASIGNACION
var a = "aaaa"; //REDECLARAR


/* Manejo del Global Scope */
var fruit = "Pineaple"
console.log(fruit)

function showFruit(){
    console.log(fruit)
}

showFruit()


/* Object Wrappper */
function countries(){
    country = "Mexico"
    console.log(country)
}
countries()
console.log(country)
