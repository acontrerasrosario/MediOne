const Sequelize     = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const parentescos = sequelize.define('parentescos', {
    fecha_creacion: Sequelize.DATE,
    grado         : Sequelize.STRING(50),
    id            : Sequelize.INTEGER,
    descripcion   : Sequelize.STRING(150),
},{
    timestamps: false,
    tableName : 'parentescos'
});

module.exports.parentescos = parentescos;