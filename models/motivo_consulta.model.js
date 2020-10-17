const Sequelize     = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const motivo_consulta = sequelize.define('motivo_consulta', {
    ID            : {
        type         : Sequelize.INTEGER,
        primaryKey   : true,
    },
    FECHA_CREACION: Sequelize.DATE,
    DESCRIPCION   : Sequelize.STRING(500),
},{
    timestamps: false,
    tableName : 'MOTIVO_CONSULTA'
});

module.exports.motivo_consulta = motivo_consulta;