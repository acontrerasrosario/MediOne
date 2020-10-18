const { requestResult } = require('../services/helpers');
const { tipo_examen } = require('../models/tipo_examen.model'); 
const { alergia } = require('../models/alergia.model'); 
const { paises } = require('../models/paises.model'); 
const { provincias } = require('../models/provincias.model'); 
const { municipios } = require('../models/municipios.model'); 
const { formato_documentos } = require('../models/formato_documentos.model'); 
const { medicamentos } = require('../models/medicamentos.model'); 
const { motivo_consulta } = require('../models/motivo_consulta.model'); 
const { parentescos } = require('../models/parentescos.model'); 
const { tipo_alergia } = require('../models/tipo_alergia.model'); 
const { vacuna } = require('../models/vacuna.model'); 
const { tipo_sangre } = require('../models/tipo_sangre.model'); 


async function obtener_tipos_de_examenes(req,res) {

    try {
        const 
        {
            id
        } = req.query
    
        if (!id) {
            let result = await tipo_examen.findAll();
            
            if (!result) return requestResult(404,null,res);

            return requestResult(200,result,res);
        }
        else {
            let result = await tipo_examen.findOne({ where: { ID: id}});
            
            if (!result) return requestResult(404,null,res);

            return requestResult(200,result,res);
        }
    } catch (error) {
        if (error) return requestResult(500,error,res);
        else return requestResult(400,null,res);
    }
}

async function obtener_tipos_de_sangre(req,res) {
    try {
        const 
        {
            id
        } = req.query
    
        if (!id) {
            let result = await tipo_sangre.findAll();
            
            if (!result) return requestResult(404,null,res);

            return requestResult(200,result,res);
        }
        else {
            let result = await tipo_sangre.findOne({ where: { ID: id}});
            
            if (!result) return requestResult(404,null,res);

            return requestResult(200,result,res);
        }
    } catch (error) {
        if (error) return requestResult(500,error,res);
        else return requestResult(400,null,res);
    }
}

async function obtener_alergias(req,res) {
    try {
        const 
        {
            id
        } = req.query
    
        if (!id) {
            let result = await alergia.findAll();
            
            if (!result) return requestResult(404,null,res);

            return requestResult(200,result,res);
        }
        else {
            let result = await alergia.findOne({ where: { ID: id}});
            
            if (!result) return requestResult(404,null,res);

            return requestResult(200,result,res);
        }   
    } catch (error) {
        if (error) return requestResult(500,error,res);
        else return requestResult(400,null,res);
    }
}

async function obtener_paises(req,res) {
    try {
        const 
        {
            id
        } = req.query
    
        if (!id) {
            let result = await paises.findAll();
            
            if (!result) return requestResult(404,null,res);

            return requestResult(200,result,res);
        }
        else {
            let result = await paises.findOne({ where: { pais_id: id}});
            
            if (!result) return requestResult(404,null,res);

            return requestResult(200,result,res);
        } 
    } catch (error) {
        if (error) return requestResult(500,error,res);
        else return requestResult(400,null,res);
    }
}

async function obtener_provincias(req,res) {
    try {
        const 
        {
            id
        } = req.query
    
        if (!id) {
            let result = await provincias.findAll();
            
            if (!result) return requestResult(404,null,res);

            return requestResult(200,result,res);
        }
        else {
            let result = await provincias.findOne({ where: { provinceID: id}});
            
            if (!result) return requestResult(404,null,res);

            return requestResult(200,result,res);
        } 
    } catch (error) {
        if (error) return requestResult(500,error,res);
        else return requestResult(400,null,res);
    }
}

async function obtener_municipios(req,res) {
    try {
        const 
        {
            id
        } = req.query
    
        if (!id) {
            let result = await municipios.findAll();
            
            if (!result) return requestResult(404,null,res);

            return requestResult(200,result,res);
        }
        else {
            let result = await municipios.findOne({ where: { municipioID: id}});
            
            if (!result) return requestResult(404,null,res);

            return requestResult(200,result,res);
        }   
    } catch (error) {
        if (error) return requestResult(500,error,res);
        else return requestResult(400,null,res);
    }
}

async function obtener_formato_documentos (req,res) {
    try {
        const 
        {
            id
        } = req.query
    
        if (!id) {
            let result = await formato_documentos.findAll();
            
            if (!result) return requestResult(404,null,res);

            return requestResult(200,result,res);
        }
        else {
            let result = await formato_documentos.findOne({ where: { ID: id}});
            
            if (!result) return requestResult(404,null,res);

            return requestResult(200,result,res);
        }  
    } catch (error) {
        if (error) return requestResult(500,error,res);
        else return requestResult(400,null,res);
    }
}

async function obtener_medicamentos (req,res) {
    try {
        const 
        {
            id
        } = req.query
    
        if (!id) {
            let result = await medicamentos.findAll();
            
            if (!result) return requestResult(404,null,res);

            return requestResult(200,result,res);
        }
        else {
            let result = await medicamentos.findOne({ where: { ID: id}});
            
            if (!result) return requestResult(404,null,res);

            return requestResult(200,result,res);
        }   
    } catch (error) {
        if (error) return requestResult(500,error,res);
        else return requestResult(400,null,res);
    }
}

async function obtener_motivos_consulta (req,res) {
    try {
        const 
        {
            id
        } = req.query
    
        if (!id) {
            let result = await motivo_consulta.findAll();
            
            if (!result) return requestResult(404,null,res);

            return requestResult(200,result,res);
        }
        else {
            let result = await motivo_consulta.findOne({ where: { ID: id}});
            
            if (!result) return requestResult(404,null,res);

            return requestResult(200,result,res);
        }     
    } catch (error) {
        if (error) return requestResult(500,error,res);
        else return requestResult(400,null,res);
    }
}

async function obtener_parentescos (req,res) {
    try {
        const 
        {
            id
        } = req.query
    
        if (!id) {
            let result = await parentescos.findAll();
            
            if (!result) return requestResult(404,null,res);

            return requestResult(200,result,res);
        }
        else {
            let result = await parentescos.findOne({ where: { ID: id}});
            
            if (!result) return requestResult(404,null,res);

            return requestResult(200,result,res);
        }     
    } catch (error) {
        if (error) return requestResult(500,error,res);
        else return requestResult(400,null,res);
    }
}

async function obtener_tipos_alergias (req,res) {
    try {
        const 
        {
            id
        } = req.query
    
        if (!id) {
            let result = await tipo_alergia.findAll();
            
            if (!result) return requestResult(404,null,res);

            return requestResult(200,result,res);
        }
        else {
            let result = await tipo_alergia.findOne({ where: { ID: id}});
            
            if (!result) return requestResult(404,null,res);

            return requestResult(200,result,res);
        }   
    } catch (error) {
        if (error) return requestResult(500,error,res);
        else return requestResult(400,null,res);
    }
}

async function obtener_vacunas (req,res) {
    try {
        const 
        {
            id
        } = req.query
    
        if (!id) {
            let result = await vacuna.findAll();
            
            if (!result) return requestResult(404,null,res);

            return requestResult(200,result,res);
        }
        else {
            let result = await vacuna.findOne({ where: { ID: id}});
            
            if (!result) return requestResult(404,null,res);

            return requestResult(200,result,res);
        }    
    } catch (error) {
        if (error) return requestResult(500,error,res);
        else return requestResult(400,null,res);
    }
}


module.exports = {
    obtener_vacunas           : obtener_vacunas,
    obtener_tipos_alergias    : obtener_tipos_alergias,
    obtener_parentescos       : obtener_parentescos,
    obtener_motivos_consulta  : obtener_motivos_consulta,
    obtener_medicamentos      : obtener_medicamentos,
    obtener_formato_documentos: obtener_formato_documentos,
    obtener_municipios        : obtener_municipios,
    obtener_provincias        : obtener_provincias,
    obtener_paises            : obtener_paises,
    obtener_alergias          : obtener_alergias,
    obtener_tipos_de_sangre   : obtener_tipos_de_sangre,
    obtener_tipos_de_examenes : obtener_tipos_de_examenes,
}