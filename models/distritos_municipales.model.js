const Sequelize = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const distritos_municipales = sequelize.define('distritos_municipales', {
    distrito_id   : Sequelize.INTEGER,
    municipioid   : Sequelize.INTEGER,
    name          : Sequelize.STRING(255),
    fecha_creacion: Sequelize.DATE,
},{
    timestamps: false,
    tableName: 'distritos_municipales'
});

module.exports.distritos_municipales = distritos_municipales;