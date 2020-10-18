const Sequelize = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const enfermedades = sequelize.define('enfermedades', {
    ID                    : {
        type     : Sequelize.STRING(20),
        primaryKey   : true,
    },
    DESCRIPCION: Sequelize.TEXT,
    FECHA_CREACION        : Sequelize.DATE,
},{
    timestamps: false,
    tableName: 'ENFERMEDADES'
});

module.exports.enfermedades = enfermedades;