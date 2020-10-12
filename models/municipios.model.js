const Sequelize = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const municipios = sequelize.define('municipios', {
    municipioid   : Sequelize.INTEGER,
    provinceid    : Sequelize.INTEGER,
    name          : Sequelize.STRING(300),
    fecha_creacion: Sequelize.DATE,
},{
    timestamps: false,
    tableName: 'municipios'
});

module.exports.municipios = municipios;