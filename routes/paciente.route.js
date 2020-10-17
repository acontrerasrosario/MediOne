const { Router } = require('express');
const router = Router();
const 
{ 
    obtener_informacion_paciente
} = require('../controller/paciente.controller');

/**
 * @swagger
 * /api/paciente/obtener_informacion_paciente:
 *  post: 
 *   tags: 
 *    - Pacientes 
 *   description: Usado para solicitar informacion de un paciente
 *   parameters:
 *      -   in: body
 *          description: objeto con el cual se hace la solicitud de informacion
 *          name: solicitud
 *          required:
 *              - identificacion
 *              - cargar_consultas
 *          properties:
 *              identificacion:
 *                  type: string
 *                  default: null
 *                  example: "604634442"
 *                  description: Cedula / Pasaporte del paciente           
 *              cargar_consultas:
 *                  type: boolean
 *                  default: false
 *                  example: false
 *                  description: Opcion para cargar las consultas
 *              qty_consultas:
 *                  type: integer
 *                  default: 10
 *                  example: 10
 *                  description: Cantidad de consultas a cargar (no puede ser mayor a 50)                
 *              orderBy_consultas:
 *                  type: string
 *                  enum: [ASC,DESC]
 *                  default: ASC
 *                  example: ASC
 *                  description: Orden de obtencion de las consultas        
 *   responses:
 *      '200':
 *          description: Una respuesta satisfactoria
 *      '404':
 *          description: No se encontro registros      
 *      '400':
 *          description: Error al procesar su solicitud
 *      '500':
 *          description: Error interno al procesar su solicitud
 */
router.get('/obtener_informacion_paciente/' , obtener_informacion_paciente);

module.exports = router;