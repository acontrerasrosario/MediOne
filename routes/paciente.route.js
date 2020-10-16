const { Router } = require('express');
const router = Router();
const 
{ 
    obtener_informacion_paciente
} = require('../controller/paciente.controller');

/**
 * @swagger
 * /api/paciente/obtener_informacion_paciente:
 *  get: 
 *   description: Usado para solicitar informacion de un paciente
 *   parameters:
 *      -   in: path
 *          name: IDENTIFICACION
 *          required: true,
 *          schema:
 *              type: varchar
 *              minimun: 6 
 *          description: Cedula/Pasaporte del paciente
 *   responses:
 *      '200':
 *          description: Una respuesta satisfactoria
 *      '404':
 *          description: No se encontro registros      
 */
router.post('/obtener_informacion_paciente/' , obtener_informacion_paciente);

module.exports = router;