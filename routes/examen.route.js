const { Router } = require('express');
const router = Router();
const 
{ 
    obtener_informacion_examen,
    obtener_informacion_examen_paginado,
} = require('../controller/examen.controller');

/**
 * @swagger
 * /api/examen/obtener_informacion_examen:
 *  get: 
 *   tags: 
 *    - Examenes 
 *   description: Usado para solicitar informacion de examen sobre un paciente
 *   parameters:
 *      -   in: query
 *          required: true
 *          description: ID de la examen a buscar
 *          name: id_examen
 *          schema:
 *              type: interger
 *      -   in: query
 *          description: Cedula / Pasaporte del paciente 
 *          name: identificacion
 *          required: true
 *          schema:
 *            type: string
 *            default: null
 *            example: "604634442"   
 *      -   in: query
 *          description: Opcion para incluir informacion del doctor que participo en la examen
 *          name: incluir_doctor
 *          schema:
 *              type: boolean
 *              example: false
 *      -   in: query
 *          description: Opcion para incluir informacion de enfermedad diagnosticada
 *          name: incluir_enfermedad
 *          schema:
 *              type: boolean
 *              example: false   
 *      -   in: query
 *          description: Opcion para incluir informacion de documento adjunto para este examen
 *          name: incluir_documento
 *          schema:
 *              type: boolean
 *              example: false 
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
router.get('/obtener_informacion_examen/' , obtener_informacion_examen);

/**
 * @swagger
 * /api/examen/obtener_informacion_examen_paginado:
 *  get: 
 *   tags: 
 *    - Examenes 
 *   description: Usado para solicitar informacion de examen sobre un paciente de forma paginada
 *   parameters:
 *      -   in: query
 *          required: true
 *          description: pagina
 *          name: page
 *          schema:
 *              type: interger
 *              example: 1
 *      -   in: query
 *          required: true
 *          description: cantidad
 *          name: qntity
 *          schema:
 *              type: interger
 *              example: 15
 *      -   in: query
 *          description: Cedula / Pasaporte del paciente 
 *          name: identificacion
 *          required: true
 *          schema:
 *            type: string
 *            default: null
 *            example: "604634442"          
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
router.get('/obtener_informacion_examen_paginado', obtener_informacion_examen_paginado)

module.exports = router;