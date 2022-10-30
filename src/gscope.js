//variables 

var a; // deelaramos la variable a 
var b = 'b' ; // declaramos y asignando 
  b = 'bb'; // reasignacion
var a = 'aa'; //redeclaracion 

//global scope

var fruit = 'Apple'; // global 

function   bestFruit(){
    console.log(fruit); 

}

bestFruit();

// var nos permite ejecutar la variable de  forma  global 


//otra forma de  hacer una variable global la cual debemos tener cuidado es cuando asignamos sin ser  declarads previamente
// en  el  ejemplo de  abajo podemos observar que asignamos  una variable dentro de  una funcion sin previamente ser  declarada, 
//lo cual nos lleva a que se pueda ejecurtar dentro y fuera de la funcion




function countries(){

    country = "México"; // global

    console.log(country); 
}



countries(); 

console.log(country);


