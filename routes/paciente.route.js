const { Router } = require('express');
const router = Router();
const 
{ 
    get_patient_info
} = require('../controller/paciente.controller');

/**
 * @swagger
 * /api/paciente/get_patient_info:
 *  get: 
 *   description: Usado para solicitar informacion de un paciente
 *   responses:
 *      '200':
 *        description: Una respuesta satisfactoria
 */
router.get('/get_patient_info' , get_patient_info);

module.exports = router;