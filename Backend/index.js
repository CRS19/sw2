const express = require ('express');
const morgan = require ('morgan');

const app = express();

const {mongoose} = require ('./database')

//Configuracion de servidor
app.set('port', process.env.PORT || 3000);


//Middlewares
app.use(morgan('dev'));
app.use(express.json());


//Rutas
app.use(('/api/empleados'),require('./rutas/empleado.rutas'));

//Iniciar servidor
app.listen(app.get('port'), () => {
    console.log ('Server on port 3000');
})