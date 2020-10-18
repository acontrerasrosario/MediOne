const { Router } = require('express');
const router = Router();
const 
{ 
    obtener_vacunas,
    obtener_tipos_alergias,
    obtener_parentescos,
    obtener_motivos_consulta,
    obtener_medicamentos,
    obtener_formato_documentos,
    obtener_municipios,
    obtener_provincias,
    obtener_paises,
    obtener_alergias,
    obtener_tipos_de_sangre,
    obtener_tipos_de_examenes,
} = require('../controller/catalogo.controller');

/**
 * @swagger
 * /api/catalogo/obtener_vacunas:
 *  get: 
 *   tags: 
 *    - Catalogos
 *   parameters:
 *      -   in: query
 *          
 *          description: id de registro
 *          name: id
 *          schema:
 *              type: string
 *              example: PA01          
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
router.get('/obtener_vacunas', obtener_vacunas)

/**
 * @swagger
 * /api/catalogo/obtener_tipos_alergias:
 *  get: 
 *   tags: 
 *    - Catalogos
 *   parameters:
 *      -   in: query
 *          
 *          description: id de registro
 *          name: id
 *          schema:
 *              type: interger
 *              example: 1          
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
router.get('/obtener_tipos_alergias', obtener_tipos_alergias)

/**
 * @swagger
 * /api/catalogo/obtener_parentescos:
 *  get: 
 *   tags: 
 *    - Catalogos
 *   parameters:
 *      -   in: query
 *          
 *          description: id de registro
 *          name: id
 *          schema:
 *              type: interger
 *              example: 1          
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
router.get('/obtener_parentescos', obtener_parentescos)

/**
 * @swagger
 * /api/catalogo/obtener_motivos_consulta:
 *  get: 
 *   tags: 
 *    - Catalogos
 *   parameters:
 *      -   in: query
 *          
 *          description: id de registro
 *          name: id
 *          schema:
 *              type: interger
 *              example: 1          
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
router.get('/obtener_motivos_consulta', obtener_motivos_consulta)


/**
 * @swagger
 * /api/catalogo/obtener_medicamentos:
 *  get: 
 *   tags: 
 *    - Catalogos
 *   parameters:
 *      -   in: query
 *          
 *          description: id de registro
 *          name: id
 *          schema:
 *              type: interger
 *              example: 1          
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
router.get('/obtener_medicamentos', obtener_medicamentos)

/**
 * @swagger
 * /api/catalogo/obtener_formato_documentos:
 *  get: 
 *   tags: 
 *    - Catalogos
 *   parameters:
 *      -   in: query
 *          
 *          description: id de registro
 *          name: id
 *          schema:
 *              type: interger
 *              example: 1          
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
router.get('/obtener_formato_documentos', obtener_formato_documentos)

/**
 * @swagger
 * /api/catalogo/obtener_municipios:
 *  get: 
 *   tags: 
 *    - Catalogos
 *   parameters:
 *      -   in: query
 *          
 *          description: id de registro
 *          name: id
 *          schema:
 *              type: interger
 *              example: 1          
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
router.get('/obtener_municipios', obtener_municipios)


/**
 * @swagger
 * /api/catalogo/obtener_provincias:
 *  get: 
 *   tags: 
 *    - Catalogos
 *   parameters:
 *      -   in: query
 *          
 *          description: id de registro
 *          name: id
 *          schema:
 *              type: interger
 *              example: 1          
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
router.get('/obtener_provincias', obtener_provincias)

/**
 * @swagger
 * /api/catalogo/obtener_paises:
 *  get: 
 *   tags: 
 *    - Catalogos
 *   parameters:
 *      -   in: query
 *          
 *          description: id de registro
 *          name: id
 *          schema:
 *              type: interger
 *              example: 1          
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
router.get('/obtener_paises', obtener_paises)

/**
 * @swagger
 * /api/catalogo/obtener_alergias:
 *  get: 
 *   tags: 
 *    - Catalogos
 *   parameters:
 *      -   in: query
 *          
 *          description: id de registro
 *          name: id
 *          schema:
 *              type: interger
 *              example: 1          
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
router.get('/obtener_alergias', obtener_alergias)

/**
 * @swagger
 * /api/catalogo/obtener_tipos_de_sangre:
 *  get: 
 *   tags: 
 *    - Catalogos
 *   parameters:
 *      -   in: query
 *          
 *          description: id de registro
 *          name: id
 *          schema:
 *              type: interger
 *              example: 1          
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
router.get('/obtener_tipos_de_sangre', obtener_tipos_de_sangre)

/**
 * @swagger
 * /api/catalogo/obtener_tipos_de_examenes:
 *  get: 
 *   tags: 
 *    - Catalogos
 *   parameters:
 *      -   in: query
 *          
 *          description: id de registro
 *          name: id
 *          schema:
 *              type: interger
 *              example: 1          
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
router.get('/obtener_tipos_de_examenes', obtener_tipos_de_examenes)

module.exports = router;