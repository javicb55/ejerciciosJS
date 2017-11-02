var fs            = require('fs');
var coleccionPersona = require('./coleccionPersona')

module.exports = function lectura(callback) {

      var personas = [];

      fs.readFile('datos.csv', 'utf8', function(err,datos){

      if(err) throw err;

      var lineas = datos.split('\n');

      for(var i = 1; i < lineas.length -1; i++){
        //console.log(lineas[i]);
      var trozo = lineas[i].split(',');
      var persona ={};
      persona.nombre   = trozo[0];
      persona.apellido = trozo[1];
      persona.email    = trozo[2];
      persona.sexo     = trozo[3];
      persona.edad     = parseInt(trozo[4]);
      personas.push(persona);
      //console.log(trozo);
    }
      callback(personas);
      var arrayPersonas              = coleccionPersona(personas);
      var coleccionPersonasMismoSexo = arrayPersonas.personasIgualSexo('M');
      //console.log(coleccionPersonasMismoSexo);

      var coleccionPersonasMasEdad = arrayPersonas.personasMasEdad(100);
      console.log(coleccionPersonasMasEdad);

      var personasExtremos = arrayPersonas.personasMasEdadMenos();
      console.log(personasExtremos);

  });
}

//console.log('Fin de programa');

/*lectura(function (datos){
  console.log(personas[1]);
})
*/
