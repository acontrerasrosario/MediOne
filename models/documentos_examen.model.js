const Sequelize = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const documentos_examen = sequelize.define('documentos_examen', {
    id                    : Sequelize.INTEGER,
    doclink               : Sequelize.TEXT,
    descripcion_documentos: Sequelize.TEXT,
    nombre                : Sequelize.STRING(150),
    formato               : Sequelize.INTEGER,
    fecha_creacion        : Sequelize.DATE,
},{
    timestamps: false,
    tableName: 'documentos_examen'
});

module.exports.documentos_examen = documentos_examen;