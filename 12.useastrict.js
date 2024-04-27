/*
Elimina algunos errores silenciosos de JavaScript cambiándolos 
para que lancen errores. Corrige errores que hacen difícil para 
los motores de JavaScript realizar optimizaciones: a veces,
 el código en modo estricto puede correr más rápido que un código 
 idéntico pero no estricto.
*/

`use strict`;

let hasDriversLicense = false;
let passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log ('I can drive :D')

const interface = 'Audio'; // could be used in the future
const private = 534;
const if // we cannot put a funcion such as like a variable.
