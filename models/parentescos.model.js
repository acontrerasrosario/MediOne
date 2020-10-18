const Sequelize     = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const parentescos = sequelize.define('parentescos', {
    FECHA_CREACION: Sequelize.DATE,
    GRADO         : Sequelize.STRING(50),
    ID            : {
        type         : Sequelize.INTEGER,
        primaryKey   : true,
    },
    DESCRIPCION   : Sequelize.STRING(150),
},{
    timestamps: false,
    tableName : 'PARENTESCO'
});

module.exports.parentescos = parentescos;