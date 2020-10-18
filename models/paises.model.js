const Sequelize     = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const paises = sequelize.define('paises', {
    FECHA_CREACION: Sequelize.DATE,
    pais_id       : {
        type         : Sequelize.INTEGER,
        primaryKey   : true,
        autoIncrement: true
    },
    iso           : Sequelize.STRING(20),
    nicename      : Sequelize.STRING(300),
    iso3          : Sequelize.STRING(20),
},{
    timestamps: false,
    tableName : 'PAISES'
});

module.exports.paises = paises;