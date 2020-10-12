const Sequelize     = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const tipo_examen = sequelize.define('tipo_examen', {
    fecha_creacion: Sequelize.DATE,
    id            : Sequelize.INTEGER,
    descripcion   : Sequelize.STRING(500),
    categoria     : Sequelize.STRING(300),
},{
    timestamps: false,
    tableName : 'tipo_examen'
});

module.exports.tipo_examen = tipo_examen;