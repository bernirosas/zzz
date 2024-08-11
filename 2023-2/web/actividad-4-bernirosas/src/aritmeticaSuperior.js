// src/aritmeticaSuperior.js

const {multiplica} = require('./aritmetica.js');

function exponente(a,b) {
	let valor = 1;
    for(i=0; i<b; i++) {
    	valor = multiplica(a,valor);
    }
    return(valor);
}

function exponenteX(a,b) {
	let valor = 0;
    for(i=0; i<b; i++) {
    	valor = multiplica(a,valor);
    }
    return(valor);
}
 
 module.exports = { 
 	exponente,
    exponenteX
 }