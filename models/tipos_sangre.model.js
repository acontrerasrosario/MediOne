const Sequelize     = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const tipo_sangre = sequelize.define('tipo_sangre', {
    fecha_creacion: Sequelize.DATE,
    id            : Sequelize.INTEGER,
    nombre        : Sequelize.STRING(100),
    nombre_corto  : Sequelize.STRING(20),
},{
    timestamps: false,
    tableName : 'tipo_sangre'
});

module.exports.tipo_sangre = tipo_sangre;