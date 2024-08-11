// index.js

const aritmetica  = require('./src/aritmetica.js');
const superior = require('./src/aritmeticaSuperior.js');

console.log(`suma ${aritmetica.suma(8, 8)}`);
console.log(`resta: ${aritmetica.resta(1, 5)}`);
console.log(`Asincrono: ${aritmetica.multiplicaAsinc(3,11)}`); // no tiene tratamiento asíncrono!
console.log(`resta natural: ${aritmetica.restaNatural(3, 6)}`);
console.log(`exponente: ${superior.exponente(2, 3)}`);
console.log(`exponente con un uno: ${superior.exponente(1,7)}`);
console.log(`exponente con Fallo: ${superior.exponenteX(2,3)}`);