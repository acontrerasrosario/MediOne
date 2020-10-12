const Sequelize = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const pacientes = sequelize.define('pacientes', {
    id : {
        type         : Sequelize.INTEGER,
        primaryKey   : true,
        autoIncrement: true
    },
    cedula          : Sequelize.STRING(20),
    primer_nombre   : Sequelize.STRING(150),
    segundo_nombre  : Sequelize.STRING(150),
    primer_apellido : Sequelize.STRING(150),
    segundo_apellido: Sequelize.STRING(150),
    fecha_nacimiento: Sequelize.DATEONLY,
    pasaporte       : Sequelize.STRING(20),
    fecha_creacion  : Sequelize.DATE,
    tipo_sangre     : Sequelize.INTEGER,
    estatus         : Sequelize.STRING(1)
},{
    timestamps: false,
    tableName: 'pacientes'
});

module.exports.pacientes = pacientes;