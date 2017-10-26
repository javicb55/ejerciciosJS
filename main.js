var circunferencia = require('./circunferencia.js');
var estadistica = require('./estadistica.js')

//var objeto = circunferencia.circunferencia(12);

/*console.log("AREA: " + objeto.area());
console.log('perimetro: ' + objeto.perimetro());

console.log('-----------------------');
*/
var coleccion = [1,2,3,4,5,6,7];
var objeto  = estadistica(coleccion);

console.log("Numero de elementos: " + objeto.numeroElementos());
console.log("Numero más grande es " + objeto.numeroMasAlto());
