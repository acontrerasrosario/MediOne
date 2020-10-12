const Sequelize     = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const medicamentos = sequelize.define('medicamentos', {
    id            : {
        type         : Sequelize.INTEGER,
        primaryKey   : true,
        autoIncrement: true
    },
    fecha_creacion: Sequelize.DATE,
    descripcion   : Sequelize.TEXT,
    estatus: Sequelize.STRING(1),
    identificacion_medicamento: Sequelize.STRING(250),
    forma_fisica: Sequelize.TEXT,
    presentacion: Sequelize.TEXT,
},{
    timestamps: false,
    tableName : 'medicamentos'
});

module.exports.medicamentos = medicamentos;