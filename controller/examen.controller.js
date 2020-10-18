const { requestResult } = require('../services/helpers');
const { pacientes } = require('../models/pacientes.model'); 
const { examenes } = require('../models/examanes.model'); 
const { personal_medico } = require('../models/personal_medico.model')
const { tipo_examen } = require('../models/tipo_examen.model')
const { documentos_examen } = require('../models/documentos_examen.model')
const { formato_documentos } = require('../models/formato_documentos.model')
const { enfermedades } = require('../models/enfermedades.model')

async function obtener_informacion_examen(req,res) {
    try {
        const 
        { 
            identificacion,
            id_examen,
        } = req.query;

        let 
        {
            incluir_doctor,
            incluir_enfermedad,
            incluir_documento,
        } = req.query;

        if (!identificacion || identificacion.length < 4 || !id_examen) return requestResult(400,null,res);

        if (!incluir_doctor || (incluir_doctor == 'false')) incluir_doctor = false;
        else incluir_doctor = (incluir_doctor == 'true');
         
        if (!incluir_enfermedad || (incluir_enfermedad == 'false')) incluir_enfermedad = false;
        else incluir_enfermedad = (incluir_enfermedad == 'true');

        if (!incluir_documento || (incluir_documento == 'false')) incluir_documento = false;
        else incluir_documento = (incluir_documento == 'true');

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
        })

        include_models.push({
            model: tipo_examen,
            attributes: ['DESCRIPCION']
        })

        if (incluir_doctor) { 
            include_models.push({
                model: personal_medico,
            });
        }

        if (incluir_enfermedad) { 
            include_models.push({
                model: enfermedades,
                attributes: ['ID','DESCRIPCION']
            });
        }

        if (incluir_documento) { 
            include_models.push({
                model: documentos_examen,
                include: 
                [
                    {
                        model: formato_documentos
                    }
                ]
            });
        }

        

        let result = await examenes.findOne({
            where: { SECUENCIA: id_examen},
            include: include_models
        });

        if (!result) return requestResult(404,null,res);

        return requestResult(200,result,res);
    } catch (error) {
        if (error) return requestResult(500,error,res);
        else return requestResult(400,null,res);
    }

}

async function obtener_informacion_examen_paginado(req,res) {
    try {
        const 
        { 
            identificacion,
            qntity,
            page,
        } = req.query;

        let _offset = (page - 1) * qntity;

        if (!identificacion || identificacion.length < 4) return requestResult(400,null,res);

        if (!incluir_doctor || (incluir_doctor == 'false')) incluir_doctor = false;
        else incluir_doctor = (incluir_doctor == 'true');
         
        if (!incluir_motivo_consulta || (incluir_motivo_consulta == 'false')) incluir_motivo_consulta = false;
        else incluir_motivo_consulta = (incluir_motivo_consulta == 'true');

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
    obtener_informacion_examen: obtener_informacion_examen,
    obtener_informacion_examen_paginado: obtener_informacion_examen_paginado,
}