// Importações necessárias
var mongoose = require('mongoose');

// Configura Promises do mongo para serem usadas como nativas
mongoose.Promise = global.Promise;
var uri = "mongodb://rbsann:renaissancelabilau2308@ds013891.mlab.com:13891/poli";


// Objeto instanciado do Banco de Dados com o Schema configurado
// module.exports.User = require('./app/models/user.js');
// module.exports.Catalog = require('./app/models/catalog.js');

// Conecta ao MongoDB
module.exports.connect = function(){
	return new Promise((resolve, reject) => {
		mongoose.connect(uri, { useMongoClient: true })
			.then(_ => resolve(true))
			.catch(err => reject(err));
	});
};

// Retorna true se mongo estiver conectado
module.exports.isConnected = function() {
	var readyState = mongoose.connection.readyState;
	if (readyState === 1) {
		return true;
	}
	return false;
};

 