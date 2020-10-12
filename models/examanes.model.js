const Sequelize     = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const examenes = sequelize.define('examenes', {
    secuencia : {
        type         : Sequelize.INTEGER,
        primaryKey   : true,
        autoIncrement: true
    },
    idpaciente    : Sequelize.INTEGER,
    idtipoexamen  : Sequelize.INTEGER,
    iddocumentos  : Sequelize.INTEGER,
    id_enfermedad : Sequelize.STRING(20),
    fecha         : Sequelize.DATE,
    fecha_creacion: Sequelize.DATE,
    user_id       : Sequelize.INTEGER,
},{
    timestamps: false,
    tableName : 'examenes'
});

module.exports.examenes = examenes;