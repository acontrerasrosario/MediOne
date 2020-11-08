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
 *   tags: 
 *    - Pacientes 
 *   description: Usado para solicitar informacion de un paciente
 *   parameters:
 *      -   in: query
 *          description: Cedula / Pasaporte del paciente  
 *          name: identificacion
 *          required: true
 *          schema:
 *              type: string
 *              example: "604634442"
 *      -   in: query 
 *          description: Opcion para cargar las consultas       
 *          name: cargar_consultas
 *          schema:
 *              type: boolean
 *              default: false
 *              example: false
 *      -   in: query 
 *          description: Cantidad de consultas a cargar (no puede ser mayor a 50)    
 *          name: qty_consultas
 *          schema:
 *              type: integer
 *              default: 10
 *              example: 10                
 *      -   in: query 
 *          description: Orden de obtencion de las consultas   
 *          name: orderBy_consultas
 *          schema:
 *              type: string
 *              enum: [ASC,DESC]
 *              default: ASC
 *              example: ASC        
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