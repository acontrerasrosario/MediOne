const Sequelize     = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const familia_paciente = sequelize.define('familia_paciente', {
    secuencia : {
        type         : Sequelize.INTEGER,
        primaryKey   : true,
        autoIncrement: true
    },
    id_paciente    : Sequelize.INTEGER,
    id_parentesco  : Sequelize.INTEGER,
    familia_paciente  : Sequelize.INTEGER,
    fecha_creacion: Sequelize.DATE,
},{
    timestamps: false,
    tableName : 'familia_paciente'
});

module.exports.familia_paciente = familia_paciente;