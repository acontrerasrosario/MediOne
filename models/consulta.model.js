const Sequelize = require("sequelize")
const { sequelize } = require('../services/postgres.service');
const { pacientes } = require('./pacientes.model');
const { motivo_consulta } = require('./motivo_consulta.model');


const consulta = sequelize.define('consulta', {
    SECUENCIA: {
        type         : Sequelize.INTEGER,
        primaryKey   : true,
        autoIncrement: true
    },
    FECHA: {
        type     : Sequelize.DATE,
        allowNull: false
    },
    TEMPERATURA       : Sequelize.FLOAT,
    PESO              : Sequelize.FLOAT,
    RESPIRACION       : Sequelize.FLOAT,
    ESTATURA          : Sequelize.FLOAT,
    PRESION_ARTERIAL  : Sequelize.FLOAT,
    OTROS_DATOS       : Sequelize.TEXT,
    DIAGNOSTICO       : Sequelize.TEXT,
    ENFERMEDAD        : Sequelize.STRING(25),
    FECHA_CREACION    : Sequelize.DATE,
    ID_PACIENTE       : Sequelize.INTEGER,
    NIVEL_GLUCOSA     : Sequelize.INTEGER,
    GLOBULOS_ROJOS    : Sequelize.FLOAT,
    GLOBULOS_BLANCOS  : Sequelize.FLOAT,
    USER_ID           : Sequelize.INTEGER,
    ID_MOTIVO_CONSULTA: Sequelize.INTEGER,
},{
    timestamps: false,
    tableName: 'CONSULTA'
});

consulta.hasOne(pacientes, {
    foreignKey: 'ID'
    ,sourceKey: 'ID_PACIENTE'
});

pacientes.belongsTo(consulta, {
    foreignKey: 'ID'
    ,sourceKey: 'ID_PACIENTE'
});

consulta.hasOne(motivo_consulta, {
    foreignKey: 'ID'
    ,sourceKey: 'ID_MOTIVO_CONSULTA'
});

motivo_consulta.belongsTo(consulta, {
    foreignKey: 'ID'
    ,sourceKey: 'ID_MOTIVO_CONSULTA'
});

module.exports.consulta = consulta;