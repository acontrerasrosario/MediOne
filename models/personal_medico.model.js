const Sequelize     = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const personal_medico = sequelize.define('personal_medico', {
    FECHA_CREACION: Sequelize.DATE,
    ID_OCUPACION  : {
        type         : Sequelize.INTEGER,
        primaryKey   : true,
        autoIncrement: true
    },
    ID: {
        type         : Sequelize.INTEGER,
        primaryKey   : true,
    },
    IDENTIFICACION : Sequelize.STRING(20),
    NOMBRES        : Sequelize.STRING(300),
    CELULAR        : Sequelize.STRING(20),
    TELEFONO       : Sequelize.STRING(20),
    CONSULTARIO    : Sequelize.STRING(10),
    CORREO         : Sequelize.STRING(20),
    ID_OCUPACION   : Sequelize.INTEGER,
    ID_ESPECIALIDAD: Sequelize.INTEGER,
    ID_CENTRO_SALUD: Sequelize.STRING(20),
},{
    timestamps: false,
    tableName : 'PERSONAL_MEDICO'
});

module.exports.personal_medico = personal_medico;