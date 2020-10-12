const Sequelize     = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const recetas = sequelize.define('recetas', {
    fecha_creacion: Sequelize.DATE,
    fecha         : Sequelize.DATEONLY,
    nota          : Sequelize.TEXT,
    id_paciente   : Sequelize.INTEGER,
    user_id       : Sequelize.INTEGER,
    medicamento1  : Sequelize.INTEGER,
    medicamento2  : Sequelize.INTEGER,
    medicamento3  : Sequelize.INTEGER,
    medicamento4  : Sequelize.INTEGER,
    medicamento5  : Sequelize.INTEGER,
},{
    timestamps: false,
    tableName : 'recetas'
});

module.exports.recetas = recetas;