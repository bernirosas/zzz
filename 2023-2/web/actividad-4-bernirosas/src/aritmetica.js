// src/aritmetica.js

function suma(a,b) {
    let val = a+b;
     return(val)
    }
 
function resta(a,b) {
    let val = a-b
    return(val)
    }
 
function restaNatural(a,b) { //Función intencionalmente mlas implementada
    let val = a-b  //si val<0 entonces val = 0
    return(val)
    } 

function division(a,b){
  if( b === 0)
    return "Error"
  let val = a/b
  return(val)
}

function multiplica(a,b){
  let val = a*b
  return(val)
}

function multiplicaAsinc(a,b){
  return new Promise((resolve, reject)=>{
      setTimeout(()=>{ resolve(a*b) }, 3000)
    })
}

module.exports = {
                    suma,
                    resta,
                    restaNatural,
                    division,
                    multiplicaAsinc,
                    multiplica
                  }