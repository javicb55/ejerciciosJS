/*for (var i = 2; i < process.argv.length ; i++){
	console.log('Argumento ' + i + ': ' + process.argv[i]);
}*/

if (process.argv.length < 3){
	process.exit(1);
}

console.log('Cadena leida: ' + process.argv[2]);
var cadena = process.argv[2];

function procesarCadena(valorCadena){
	var _cadena = valorCadena;
	//Todo lo que define aquí, es privado
	return {
		longitudCadena    : function() { return _cadena.length; },
		cadenaEsNumero    : function() { return !isNaN(cadena); },
		cadenaEnMayuscula : function() { return _cadena.toUpperCase();},
<<<<<<< HEAD
		cadenaAlReves	    : function() { return _cadena.split('').reverse().join('');},
		esPalindromo	    : function() { return _cadena === this.cadenaAlReves();} 					
=======
		cadenaAlReves	  : function() { return _cadena.split('').reverse().join('');},
		esPalindromo	  : function() { return _cadena === this.cadenaAlReves();} 					
>>>>>>> a8721a06a1418273a213e187fb320c6c90c95343
	};
}


var cadena1 = procesarCadena(cadena);

console.log("Longitud de la cadena: " + cadena + " es: " +
cadena1.longitudCadena());
console.log("La cadena " + cadena + " ¿es un número? " + cadena1.cadenaEsNumero());
console.log("La cadena " + cadena + " en mayúsculas " + cadena1.cadenaEnMayuscula());
console.log("La cadena " + cadena + " separada " + cadena1.cadenaAlReves());
console.log("La cadena " + cadena + " ¿es palindromo? " + cadena1.esPalindromo());
<<<<<<< HEAD
=======


>>>>>>> a8721a06a1418273a213e187fb320c6c90c95343
