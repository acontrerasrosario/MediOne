const Sequelize     = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const formato_documentos = sequelize.define('formato_documentos', {
    id            : Sequelize.INTEGER,
    descripcion   : Sequelize.STRING(150),
    fecha_creacion: Sequelize.DATE,
},{
    timestamps: false,
    tableName : 'formato_documentos'
});

module.exports.formato_documentos = formato_documentos;