const Sequelize     = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const medicamentos = sequelize.define('medicamentos', {
    ID            : {
        type         : Sequelize.INTEGER,
        primaryKey   : true,
        autoIncrement: true
    },
    FECHA_CREACION            : Sequelize.DATE,
    DESCRIPCION               : Sequelize.TEXT,
    ESTATUS                   : Sequelize.STRING(1),
    IDENTIFICACION_MEDICAMENTO: Sequelize.STRING(250),
    FORMA_FISICA              : Sequelize.TEXT,
    PRESENTACION              : Sequelize.TEXT,
},{
    timestamps: false,
    tableName : 'MEDICAMENTOS'
});

module.exports.medicamentos = medicamentos;