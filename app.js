// VARIABLES EN JAVASCRIPT

// RESUMEN
// --------------------
// 1) RE DECLARAR VARIABLES EN EL MISMO SCOPE
// se puede
var instrumento = "guitarra";
var instrumento = "piano";
// no se puede
let instrumento = "guitarra";
let instrumento = "piano"; // output: Error
// no se puede
const instrumento = "guitarra";
const instrumento = "piano"; // output: Error
// note: solo puedes re declarar variables let y const en un distinto scope
// --------------------
// --------------------

// 2) DECLARAR VARIABLES SIN INICIALIZARLAS 
// se puede
var producto;
// se puede
let producto; // output: undefined
// no se puede!
const producto; // output: Error
// note: las variables const siempre deben ser inicializadas
// --------------------
// --------------------


// SCOPES
// 1. Global Scope
// 2. Local Scope
//      a. Function Scope
//      b. Block Scope
