const Sequelize = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const ocupacion = sequelize.define('ocupacion', {
    id : {
        type         : Sequelize.INTEGER,
        primaryKey   : true,
        autoIncrement: true
    },
    descripcion   : Sequelize.STRING(500),
    fecha_creacion: Sequelize.DATE,
},{
    timestamps: false,
    tableName: 'ocupacion'
});

module.exports.ocupacion = ocupacion;