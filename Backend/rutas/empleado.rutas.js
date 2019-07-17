const express = require ('express');
const router = express.Router();

const empleado = require ('../Controles/empleado.Controles');

router.get('/', empleado.getEmpleados);
router.post('/', empleado.createEmpleado); //guardar datos
router.get('/:id', empleado.getEmpleado);
router.put('/:id', empleado.editEmpleado)
router.delete('/:id', empleado.deleteEmpleado);


module.exports = router;