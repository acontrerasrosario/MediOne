const Sequelize = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const paises = sequelize.define('paises', {
    fecha_creacion: Sequelize.DATE,
    pais_id      : Sequelize.INTEGER,
    iso         : Sequelize.STRING(20),
    nicename   : Sequelize.STRING(300),
    iso3       : Sequelize.STRING(20),
},{
    timestamps: false,
    tableName: 'paises'
});

module.exports.paises = paises;