const Sequelize     = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const provincias = sequelize.define('provincias', {
    fecha_creacion       : Sequelize.DATE,
    provinceid           : Sequelize.INTEGER,
    provinceName         : Sequelize.STRING(300),
    provinceCountry_numid: Sequelize.INTEGER,
},{
    timestamps: false,
    tableName : 'provincias'
});

module.exports.provincias = provincias;