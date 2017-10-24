var request = require('request');
var status = undefined;


function getSiteStatus(callBack){
  request ('http://google.com', function(error, response,body){
    if(!error && response.statusCode == 200){
      status = response.statusCode;
    }
    callBack(status);
  });
}
getSiteStatus(function (datos){
  console.log(datos);
});
//console.log(status);
console.log("Fin de programa");
