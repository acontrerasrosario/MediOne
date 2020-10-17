const { requestResult } = require('../services/helpers');
const { pacientes } = require('../models/pacientes.model'); 
const { consulta } = require('../models/consulta.model'); 
const { motivo_consulta } = require('../models/motivo_consulta.model')
const { personal_medico } = require('../models/personal_medico.model')

async function obtener_informacion_consulta(req,res) {
    try {
        const 
        { 
            identificacion,
            id_consulta,
        } = req.query;

        let 
        {
            incluir_doctor,
            incluir_motivo_consulta,
        } = req.query;

        if (!identificacion || identificacion.length < 4 || !id_consulta) return requestResult(400,null,res);

        if (!incluir_doctor || (incluir_doctor == 'false')) incluir_doctor = false;
        else incluir_doctor = (incluir_doctor == 'true');
         
        if (!incluir_motivo_consulta || (incluir_motivo_consulta == 'false')) incluir_motivo_consulta = false;
        else incluir_motivo_consulta = (incluir_motivo_consulta == 'true');


        if (incluir_doctor) { 
            include_models.push({
                model: personal_medico,
            });
        }

        if (incluir_motivo_consulta) {
            include_models.push({
                model: motivo_consulta,
                attributes: ['DESCRIPCION'],
            });
        }
        
        let result = await consulta.findOne({
            where: { SECUENCIA: id_consulta},
            include: 
            [
                {
                    model: pacientes,
                    attributes: [],
                    required: true,
                    where: 
                    {
                        $or: [
                            {
                                CEDULA: 
                                {
                                    $eq: identificacion
                                }
                            }, 
                            {
                                PASAPORTE: 
                                {
                                    $eq: identificacion
                                }
                            }
                        ] 
                    }
                }    
            ]
        });

        if (!result) return requestResult(404,null,res);

        return requestResult(200,result,res);
    } catch (error) {
        if (error) return requestResult(500,error,res);
        else return requestResult(400,null,res);
    }

}

async function obtener_informacion_consulta_paginado(req,res) {
    try {
        const 
        { 
            identificacion,
            qntity,
            page,
        } = req.query;

        let _offset = (page - 1) * qntity;

        if (!identificacion || identificacion.length < 4) return requestResult(400,null,res);

        let include_models = [];

        include_models.push({
                model: pacientes,
                attributes: [],
                required: true,
                where: 
                {
                    $or: [
                        {
                            CEDULA: 
                            {
                                $eq: identificacion
                            }
                        }, 
                        {
                            PASAPORTE: 
                            {
                                $eq: identificacion
                            }
                        }
                    ] 
                }
        });

      


        let result = await consulta.findAll({
            offset: _offset,
            limit: qntity,
            include: include_models
        });

        if (!result) return requestResult(404,null,res);

        return requestResult(200,result,res);
    } catch (error) {
        if (error) return requestResult(500,error,res);
        else return requestResult(400,null,res);
    }

}

module.exports = {
    obtener_informacion_consulta: obtener_informacion_consulta,
    obtener_informacion_consulta_paginado: obtener_informacion_consulta_paginado,
}