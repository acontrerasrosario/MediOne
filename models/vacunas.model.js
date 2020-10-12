const Sequelize     = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const vacuna = sequelize.define('vacuna', {
    fecha_creacion: Sequelize.DATE,
    id            : Sequelize.STRING(20),
    descripcion   : Sequelize.STRING(250),
    estatus       : Sequelize.STRING(1),
    tipo_vacuna   : Sequelize.STRING(250),
},{
    timestamps: false,
    tableName : 'vacuna'
});

module.exports.vacuna = vacuna;