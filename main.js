var circunferencia          = require('./circunferencia.js');
var estadistica             = require('./estadistica.js');
var lectura                 = require('./leerCSV');
var coleccionPersona        = require('./coleccionPersona');


var objeto = circunferencia.circunferencia(12);

console.log("AREA: " + objeto.area());
console.log('perimetro: ' + objeto.perimetro());

console.log('-----------------------');

var coleccion = [1,2,3,4,5,6,7];
var objeto2  = estadistica(coleccion);

console.log("Numero de elementos: " + objeto2.numeroElementos());
console.log("Numero más grande es " + objeto2.numeroMasAlto());

console.log('-----------------------');

lectura(function (datos){
  console.log(datos[1]);
})
