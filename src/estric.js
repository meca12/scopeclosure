//strict mode 

/*
 nos permite  ejecutar  reglas  para tener control de  asignación 
de variables y elementos clave
 */
 
"use strict";
pi = 3.1416; // aqui solo asignamos sin declarar

 console.log(pi);


 // este  de igual forma se puede declarar dentro de  una función


 function matemaTic(){
    "use strict"; 
   pi = 3.141632

   console.log(pi);//  el resultado sera el mismo de arriba

 }

 matemaTic();