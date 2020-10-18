const Sequelize     = require("sequelize")
const { sequelize } = require('../services/postgres.service');
const { formato_documentos } = require('./formato_documentos.model');


const documentos_examen = sequelize.define('documentos_examen', {
    ID                    : {
        type         : Sequelize.INTEGER,
        primaryKey   : true,
        autoIncrement: true
    },
    DOCLINK               : Sequelize.TEXT,
    DESCRIPCION_DOCUMENTOS: Sequelize.TEXT,
    NOMBRE                : Sequelize.STRING(150),
    FORMATO               : Sequelize.INTEGER,
    FECHA_CREACION        : Sequelize.DATE,
},{
    timestamps: false,
    tableName : 'DOCUMENTOS_EXAMEN'
});

documentos_examen.hasOne(formato_documentos, {
    foreignKey: 'ID'
    ,sourceKey: 'FORMATO'
});

formato_documentos.belongsTo(documentos_examen, {
    foreignKey: 'ID'
    ,sourceKey: 'FORMATO'
});

module.exports.documentos_examen = documentos_examen;