const Sequelize     = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const tipo_sangre = sequelize.define('tipo_sangre', {
    FECHA_CREACION: Sequelize.DATE,
    ID            : {
        type         : Sequelize.INTEGER,
        primaryKey   : true,
    },
    nombre        : Sequelize.STRING(100),
    nombre_corto  : Sequelize.STRING(20),
},{
    timestamps: false,
    tableName : 'TIPO_SANGRE'
});

module.exports.tipo_sangre = tipo_sangre;