const Empleado = require('../modelos/empleado');

const empleadoCtrl = {};

empleadoCtrl.getEmpleados = async (req, res) => {
   const empleados = await Empleado.find();
   res.json(empleados);
};

empleadoCtrl.createEmpleado = async(req, res) => {
    const empleado = new Empleado(req.body);
    console.log(empleado);
    await empleado.save();
    res.json({
        'status': 'Empleado guardado' 
    });
};

empleadoCtrl.getEmpleado =  async(req, res) => {
    //console.log(req.params.id);
    const empleado = await Empleado.findById(req.params.id);
    res.json(empleado);
};

empleadoCtrl.editEmpleado = async(req, res) => {
    const {id} = req.params;
    const empleado = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        clave: req.body.clave,
        correp: req.body.correp,
    }
    await Empleado.findByIdAndUpdate(id, {$set: empleado}, {new: true} );
    res.json({status: 'empleado actualizado'});
};

empleadoCtrl.deleteEmpleado = async(req, res) => {
    await Empleado.findByIdAndRemove(req.params.id);
    res.json({status: 'Empleado eliminado'});
}

module.exports = empleadoCtrl;