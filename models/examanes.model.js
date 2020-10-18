const Sequelize     = require("sequelize")
const { sequelize } = require('../services/postgres.service');
const { pacientes } = require('./pacientes.model');
const { personal_medico } = require('./personal_medico.model');
const { tipo_examen } = require('./tipo_examen.model');
const { enfermedades } = require('./enfermedades.model');
const { documentos_examen } = require('./documentos_examen.model');

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
    ,sourceKey: 'IDPACIENTE'
});

pacientes.belongsTo(examenes, {
    foreignKey: 'ID'
    ,sourceKey: 'IDPACIENTE'
});

examenes.hasOne(personal_medico, {
    foreignKey: 'ID'
    ,sourceKey: 'IDPERSONAL_MEDICO'
});

personal_medico.belongsTo(examenes, {
    foreignKey: 'ID'
    ,sourceKey: 'IDPERSONAL_MEDICO'
});

examenes.hasOne(tipo_examen, {
    foreignKey: 'ID'
    ,sourceKey: 'IDTIPOEXAMEN'
});

tipo_examen.belongsTo(examenes, {
    foreignKey: 'ID'
    ,sourceKey: 'IDTIPOEXAMEN'
});

examenes.hasOne(enfermedades, {
    foreignKey: 'ID'
    ,sourceKey: 'ID_ENFERMEDAD'
});

enfermedades.belongsTo(examenes, {
    foreignKey: 'ID'
    ,sourceKey: 'ID_ENFERMEDAD'
});

examenes.hasOne(documentos_examen, {
    foreignKey: 'ID'
    ,sourceKey: 'IDDOCUMENTOS'
});

documentos_examen.belongsTo(examenes, {
    foreignKey: 'ID'
    ,sourceKey: 'IDDOCUMENTOS'
});

module.exports.examenes = examenes;