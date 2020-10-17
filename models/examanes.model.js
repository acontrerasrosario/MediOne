const Sequelize     = require("sequelize")
const { sequelize } = require('../services/postgres.service');
const { pacientes } = require('./pacientes.model');
const { personal_medico } = require('./personal_medico.model');

const examenes = sequelize.define('examenes', {
    SECUENCIA : {
        type         : Sequelize.INTEGER,
        primaryKey   : true,
        autoIncrement: true
    },
    IDPACIENTE    : Sequelize.INTEGER,
    IDTIPOEXAMEN  : Sequelize.INTEGER,
    IDDOCUMENTOS  : Sequelize.INTEGER,
    ID_ENFERMEDAD : Sequelize.STRING(20),
    FECHA         : Sequelize.DATE,
    FECHA_CREACION: Sequelize.DATE,
    IDPERSONAL_MEDICO       : Sequelize.INTEGER,
},{
    timestamps: false,
    tableName : 'EXAMENES'
});

examenes.hasOne(pacientes, {
    foreignKey: 'ID'
    ,sourceKey: 'ID_PACIENTE'
});

pacientes.belongsTo(examenes, {
    foreignKey: 'ID'
    ,sourceKey: 'ID_PACIENTE'
});

examenes.hasOne(personal_medico, {
    foreignKey: 'ID'
    ,sourceKey: 'IDPERSONAL_MEDICO'
});

personal_medico.belongsTo(examenes, {
    foreignKey: 'ID'
    ,sourceKey: 'IDPERSONAL_MEDICO'
});



module.exports.examenes = examenes;