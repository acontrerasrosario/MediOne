const Sequelize = require("sequelize")
const { sequelize } = require('../services/postgres.service');
const { tipo_sangre } = require('./tipo_sangre.model'); 

const pacientes = sequelize.define('pacientes', {
    ID : {
        type         : Sequelize.INTEGER,
        primaryKey   : true,
        autoIncrement: true
    },
    CEDULA          : Sequelize.STRING(20),
    PRIMER_NOMBRE   : Sequelize.STRING(150),
    SEGUNDO_NOMBRE  : Sequelize.STRING(150),
    PRIMER_APELLIDO : Sequelize.STRING(150),
    SEGUNDO_APELLIDO: Sequelize.STRING(150),
    FECHA_NACIMIENTO: Sequelize.DATEONLY,
    PASAPORTE       : Sequelize.STRING(20),
    FECHA_CREACION  : Sequelize.DATE,
    TIPO_SANGRE     : Sequelize.INTEGER,
    ESTATUS         : Sequelize.STRING(1)
},{
    timestamps: false,
    tableName: 'PACIENTES'
});

pacientes.hasOne(tipo_sangre, {
    foreignKey: 'ID',
    sourceKey: 'TIPO_SANGRE'
});

tipo_sangre.belongsTo(pacientes, {
    foreignKey: 'ID',
    sourceKey: 'TIPO_SANGRE'
});

module.exports.pacientes = pacientes;