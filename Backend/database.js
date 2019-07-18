const mongoose = require('mongoose');
const URI = 'mongodb://localhost/empleado';

mongoose.connect(URI).then(db => console.log('Conectado a Mongo'));

module.exports = mongoose;