const Sequelize           = require("sequelize")
const { sequelize }       = require('../services/postgres.service');

const alergia = sequelize.define('alergia', {
    ID: {
        type         : Sequelize.INTEGER,
        primaryKey   : true,
        autoIncrement: true
    },
    FECHA_CREACION: {
        type     : Sequelize.DATE,
        allowNull: false
    },
    DESCRIPCION: Sequelize.STRING(250)
},{
    timestamps: false,
    tableName : 'ALERGIA_A'
});

module.exports.alergia = alergia;