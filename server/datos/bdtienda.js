
//var mongoose = require('mongoose');
//var BDTienda = mongoose.connect('mongodb://localhost/BDTienda');
//module.exports = BDTienda;

//Conexión a Mongoose.
var mongoose = require('mongoose');
var BDTienda = mongoose.connect('mongodb://localhost/BDTienda', function(error){
   if(error){
      throw error; 
   }else{
      console.log('Conectado a MongoDB');
   }
});
module.exports = BDTienda;