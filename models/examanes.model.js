const Sequelize     = require("sequelize")
const { sequelize } = require('../services/postgres.service');

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
    USER_ID       : Sequelize.INTEGER,
},{
    timestamps: false,
    tableName : 'EXAMENES'
});

module.exports.examenes = examenes;