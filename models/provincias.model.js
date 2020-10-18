const Sequelize     = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const provincias = sequelize.define('provincias', {
    FECHA_CREACION       : Sequelize.DATE,
    provinceID           : {
        type         : Sequelize.INTEGER,
        primaryKey   : true,
        autoIncrement: true
    },
    provinceName         : Sequelize.STRING(300),
    provinceCountry_numid: Sequelize.INTEGER,
},{
    timestamps: false,
    tableName : 'PROVINCIAS'
});

module.exports.provincias = provincias;