const { requestResult } = require('../services/helpers');
const { pacientes } = require('../models/pacientes.model'); 
const { tipo_sangre } = require('../models/tipo_sangre.model'); 
const { consulta } = require('../models/consulta.model'); 
const { motivo_consulta } = require('../models/motivo_consulta.model');


async function obtener_informacion_paciente(req,res){

    try {
        const 
        { 
            identificacion,
        } = req.query;

        let 
        {
            cargar_consultas,
            qty_consultas,
            orderBy_consultas,
        } = req.query

        if (!cargar_consultas || (cargar_consultas == 'false')) cargar_consultas = false;
        else cargar_consultas = (cargar_consultas == 'true');

        if (!identificacion || identificacion.length < 4) return requestResult(400,null,res);

        if (cargar_consultas) {
            if (!orderBy_consultas) orderBy_consultas = 'ASC';

            if (!qty_consultas) qty_consultas = 15;
            if (qty_consultas > 50) qty_consultas = 50;
        } 

        let result = {};

        let paciente_result = await pacientes.findOne({
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

        if (!paciente_result) return requestResult(404,null,res);

        result.paciente = {
            CEDULA          : paciente_result.CEDULA,
            PRIMER_NOMBRE   : paciente_result.PRIMER_NOMBRE,
            SEGUNDO_NOMBRE  : paciente_result.SEGUNDO_NOMBRE,
            PRIMER_APELLIDO : paciente_result.PRIMER_APELLIDO,
            SEGUNDO_APELLIDO: paciente_result.SEGUNDO_APELLIDO,
            FECHA_NACIMIENTO: paciente_result.FECHA_NACIMIENTO,
            PASAPORTE       : paciente_result.PASAPORTE,
            ESTATUS         : paciente_result.ESTATUS,
        }

        let tipoSangre_result = await tipo_sangre.findOne({ where: { ID: (paciente_result.TIPO_SANGRE) } });

        result.paciente['TIPO_SANGRE'] = tipoSangre_result.nombre_corto;

        if (cargar_consultas) {
            if (!orderBy_consultas) orderBy_consultas = 'ASC';

            if (!qty_consultas) qty_consultas = 15;
            if (qty_consultas > 50) qty_consultas = 50;

            let consultas_result = await consulta.findAll({
                where: { ID_PACIENTE: paciente_result.ID },
                limit: qty_consultas,
                order: [
                    ['SECUENCIA', orderBy_consultas]
                ],
                include: 
                [
                    {
                        model: motivo_consulta,
                        attributes: ['DESCRIPCION']
                    }
                ]
            })
            
            result["consultas"] = consultas_result

        } 

        return requestResult(200,result,res);
    } catch (error) {
        if (error) return requestResult(500,error,res);
        else return requestResult(400,null,res);
    }
}

module.exports = {
    obtener_informacion_paciente: obtener_informacion_paciente,
}