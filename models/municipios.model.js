const Sequelize = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const municipios = sequelize.define('municipios', {
    municipioID   : {
        type         : Sequelize.INTEGER,
        primaryKey   : true,
        autoIncrement: true
    },
    provinceID    : Sequelize.INTEGER,
    name          : Sequelize.STRING(300),
    FECHA_CREACION: Sequelize.DATE,
},{
    timestamps: false,
    tableName: 'MUNICIPIOS'
});

module.exports.municipios = municipios;