const Sequelize           = require("sequelize")
const { sequelize }       = require('../services/postgres.service');

const tipo_alergia = sequelize.define('tipo_alergia', {
    ID: {
        type         : Sequelize.INTEGER,
        primaryKey   : true,
        autoIncrement: true
    },
    FECHA_CREACION: {
        type     : Sequelize.DATE,
        allowNull: false
    },
    DESCRIPCION: Sequelize.STRING(250)
},{
    timestamps: false,
    tableName : 'TIPO_ALERGIA'
});

module.exports.tipo_alergia = tipo_alergia;