//block scope significa  que la variables definidas dentro  de  un bloque
// solo pueden ser usadas dentro de ese bloque  
//  se usa let  y const para el bloque  de código 
// var para  alcance  global de la  variable 

//bloque es  todo lo que etse dentro de  unas handelbars o funciones

// ejemplo 


function misVariables() {

     if(true){
        var  fruit1 = "apple"; // global scope
        let fruit2 = "pineaple"; /// block scope
        const  fruit3 ="orange";/// block scope
        
     }

     console.log(fruit1);
     console.log(fruit2);
     console.log(fruit3);



}

misVariables();

// en conclusión  solo las variables de  alcance  block scope no pueden ser ejecutadas , fuera de lógica  de una función
// o bien fuera de  una función o bloque de código, dónde ésta sea declarada, en su caso  variable con var son de alcance global
// pueden ser ejecutadas  fuera del scope de código , función,  o lógica de función, el problema de estas es que se pueden reasignar o  redeclarar


// fruit1  y fruit2 solo pueden ser ejecutadas si estas son ejecutadas dentro del scope del if  como semuestra  en el siguiente  ejemplo 


/*
function misVariables() {

     if(true){
        var  fruit1 = "apple"; // global scope
        let fruit2 = "pineaple"; /// block scope
        const  fruit3 ="orange";/// block scope

        console.log(fruit2);
     console.log(fruit3);
        
     }

     console.log(fruit1);
     



}

misVariables();

 solo de esta  forma, podemos ver el resultado de las  tres  variables

*/