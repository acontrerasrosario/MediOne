const Sequelize = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const consulta = sequelize.define('consulta', {
    secuencia: {
        type         : Sequelize.INTEGER,
        primaryKey   : true,
        autoIncrement: true
    },
    fecha: {
        type     : Sequelize.DATE,
        allowNull: false
    },
    temperatura       : Sequelize.FLOAT,
    peso              : Sequelize.FLOAT,
    respiracion       : Sequelize.FLOAT,
    estatura          : Sequelize.FLOAT,
    presion_arterial  : Sequelize.FLOAT,
    otros_datos       : Sequelize.TEXT,
    diagnostico       : Sequelize.TEXT,
    enfermedad        : Sequelize.STRING(25),
    fecha_creacion    : Sequelize.DATE,
    id_paciente       : Sequelize.INTEGER,
    nivel_glucosa     : Sequelize.INTEGER,
    globulos_rojos    : Sequelize.FLOAT,
    globulos_blancos  : Sequelize.FLOAT,
    globulos_blancos  : Sequelize.FLOAT,
    user_id           : Sequelize.INTEGER,
    id_motivo_consulta: Sequelize.INTEGER,
},{
    timestamps: false,
    tableName: 'consulta'
});

module.exports.consulta = consulta;