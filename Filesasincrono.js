var fs = require('fs');

var data = fs.readFile('/etc/passwd', function(err, datos){
  if(err) console.log("Error en la lectura" + err);
  console.log(datos);
});

console.log('Fin del programa');
