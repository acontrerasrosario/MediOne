const Sequelize     = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const personal_medico = sequelize.define('personal_medico', {
    fecha_creacion: Sequelize.DATE,
    id            : {
        type         : Sequelize.INTEGER,
        primaryKey   : true,
        autoIncrement: true
    },
    identificacion : Sequelize.STRING(20),
    nombres        : Sequelize.STRING(300),
    celular        : Sequelize.STRING(20),
    telefono       : Sequelize.STRING(20),
    consultario    : Sequelize.STRING(10),
    correo         : Sequelize.STRING(20),
    id_ocupacion   : Sequelize.INTEGER,
    id_especialidad: Sequelize.INTEGER,
    id_centro_salud: Sequelize.STRING(20),
},{
    timestamps: false,
    tableName : 'personal_medico'
});

module.exports.personal_medico = personal_medico;