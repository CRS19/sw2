const mongoose = require('mongoose');
const URI = 'mongodb://localhost/clientes';

mongoose.connect(URI).then(db => console.log('Conectado a Mongo'));

module.exports = mongoose;