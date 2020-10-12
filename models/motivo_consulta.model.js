const Sequelize     = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const motivo_consulta = sequelize.define('motivo_consulta', {
    id : Sequelize.INTEGER,
    fecha_creacion: Sequelize.DATE,
    descripcion   : Sequelize.STRING(500),
},{
    timestamps: false,
    tableName : 'motivo_consulta'
});

module.exports.motivo_consulta = motivo_consulta;