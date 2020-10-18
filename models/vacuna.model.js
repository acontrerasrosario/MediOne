const Sequelize     = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const vacuna = sequelize.define('vacuna', {
    FECHA_CREACION: Sequelize.DATE,
    ID            : {
        type         : Sequelize.STRING(20),
        primaryKey   : true,
    },
    DESCRIPCION   : Sequelize.STRING(250),
    ESTATUS       : Sequelize.STRING(1),
    TIPO_VACUNA   : Sequelize.STRING(250),
},{
    timestamps: false,
    tableName : 'VACUNA'
});

module.exports.vacuna = vacuna;