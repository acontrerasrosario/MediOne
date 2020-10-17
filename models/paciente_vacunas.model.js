const Sequelize = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const paciente_vacunas = sequelize.define('paciente_vacunas', {
    secuencia : {
        type         : Sequelize.INTEGER,
        primaryKey   : true,
        autoIncrement: true
    },
    fecha_creacion: Sequelize.DATE,
    idvacuna      : Sequelize.STRING(20),
    dosis         : Sequelize.FLOAT,
    id_paciente   : Sequelize.INTEGER,
    IDPERSONAL_MEDICO       : Sequelize.INTEGER,
    fecha         : Sequelize.DATEONLY,
    refuerzo      : Sequelize.BOOLEAN,
},{
    timestamps: false,
    tableName: 'paciente_vacunas'
});

module.exports.paciente_vacunas = paciente_vacunas;