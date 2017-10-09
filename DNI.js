/*Realiza un programa en JavaScript que usando clousures y dado un NIF/DNI
Nos diga si es correcto o no el formato DNI/NIF (que contenga 8 nu´meros u 8 nu´meros mas una letra)
Nos diga si hemos introducido un DNI o NIF
En el caso de un DNI nos de la letra
En el caso de un NIF nos valide la letra.*/


// Lee si hemos introducido argumentos
if (process.argv.length < 3){
	console.log("Añade una DNI al programa.");
	process.exit(1);
} 



function myFunction(){
	
	var numero = process.argv[2];
	var expresionRegular = /[1]/g;
	var result = numero.match(expresionRegular);
	console.log(result);
}