const Sequelize     = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const formato_documentos = sequelize.define('formato_documentos', {
    ID            : {
        type         : Sequelize.INTEGER,
        primaryKey   : true,
        autoIncrement: true
    },
    DESCRIPCION   : Sequelize.STRING(150),
    FECHA_CREACION: Sequelize.DATE,
},{
    timestamps: false,
    tableName : 'FORMATO_DOCUMENTOS'
});

module.exports.formato_documentos = formato_documentos;