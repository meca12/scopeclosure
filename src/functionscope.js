//function scope 

function greetins(){
 // las variables  aqui declaradas y asignadas seran acceibles solo para 
 // esta función y funciónes  anidadas dentro de ellas 

 let username = "paato"; 

 console.log(username); 

 if(username === "Anna"){
    console.log(`Hola ${username}`);
 }else {
    console.log(`Hola , ${username}`);
 }

}

greetins();


// esta  variable no puede ser  ejecutada  fuera de su función 
// ya que  solo su alcance  esta dentro del scope de la función arriba declarada
// y dentro de la lógica de  la función esto se llama  función scope 
//solo esta  variable  puede ser ejecudata  fuera de la función cuando sea  declarada de forma global
console.log(username);