const Sequelize     = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const especialidades = sequelize.define('especialidades', {
    id : {
        type         : Sequelize.INTEGER,
        primaryKey   : true,
        autoIncrement: true
    },
    descripcion   : Sequelize.STRING(300),
    tipo          : Sequelize.STRING(300),
    descripcion   : Sequelize.TEXT,
    fecha_creacion: Sequelize.DATE,
},{
    timestamps: false,
    tableName : 'especialidades'
});

module.exports.especialidades = especialidades;