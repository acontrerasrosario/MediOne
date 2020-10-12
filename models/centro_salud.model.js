const Sequelize = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const centro_salud = sequelize.define('centro_salud', {
    id: {
        type: Sequelize.STRING(300),
        allowNull: false,
        // type: Sequelize.INTEGER,
        // primaryKey: true,
        // autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING(300),
        allowNull: false
    },
    direccion: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    telefono: {
        type: Sequelize.STRING(20),
        allowNull: true
    },
    tipo: {
        type: Sequelize.STRING(100),
    },
    capacidad: {
        type: Sequelize.INTEGER,
    },
    ubicacion_geografica: {
        type: Sequelize.STRING(200),
    },
},{
    timestamps: false,
    tableName: 'centro_salud'
});

module.exports.centro_salud = centro_salud;