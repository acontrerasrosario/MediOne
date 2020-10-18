const Sequelize     = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const tipo_examen = sequelize.define('tipo_examen', {
    FECHA_CREACION: Sequelize.DATE,
    ID            :{
        type         : Sequelize.INTEGER,
        primaryKey   : true,
        autoIncrement: true
    },
    DESCRIPCION   : Sequelize.STRING(500),
    CATEGORIA     : Sequelize.STRING(300),
},{
    timestamps: false,
    tableName : 'TIPO_EXAMEN'
});

module.exports.tipo_examen = tipo_examen;