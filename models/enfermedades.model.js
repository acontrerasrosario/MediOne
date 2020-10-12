const Sequelize = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const enfermedades = sequelize.define('enfermedades', {
    id                    : Sequelize.STRING(20),
    descripcion_documentos: Sequelize.TEXT,
    fecha_creacion        : Sequelize.DATE,
},{
    timestamps: false,
    tableName: 'enfermedades'
});

module.exports.enfermedades = enfermedades;