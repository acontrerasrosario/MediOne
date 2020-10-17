const { Router } = require('express');
const router = Router();
const 
{ 
    obtener_informacion_consulta,
    obtener_informacion_consulta_paginado,
} = require('../controller/consulta.controller');

/**
 * @swagger
 * /api/consulta/obtener_informacion_consulta:
 *  get: 
 *   tags: 
 *    - Consultas 
 *   description: Usado para solicitar informacion de consulta sobre un paciente
 *   parameters:
 *      -   in: query
 *          required: true
 *          description: ID de la consulta a buscar
 *          name: id_consulta
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
 *          description: Opcion para incluir informacion del doctor que participo en la consulta
 *          name: incluir_doctor
 *          schema:
 *              type: boolean
 *              example: false
 *      -   in: query
 *          description: Opcion para incluir informacion del motivo de consulta
 *          name: incluir_motivo_consulta
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
router.get('/obtener_informacion_consulta/' , obtener_informacion_consulta);

/**
 * @swagger
 * /api/consulta/obtener_informacion_consulta_paginado:
 *  get: 
 *   tags: 
 *    - Consultas 
 *   description: Usado para solicitar informacion de consulta sobre un paciente de forma paginada
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
router.get('/obtener_informacion_consulta_paginado', obtener_informacion_consulta_paginado)

module.exports = router;