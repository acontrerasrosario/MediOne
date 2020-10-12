const Sequelize = require("sequelize")
const { sequelize } = require('../services/postgres.service');

const contacto = sequelize.define('contacto', {
    secuencia: {
        type         : Sequelize.INTEGER,
        primaryKey   : true,
        autoIncrement: true
    },
    tel_residencia: Sequelize.STRING(20),
    tel_oficina   : Sequelize.STRING(20),
    movil         : Sequelize.STRING(20),
    fax           : Sequelize.STRING(20),
    email         : Sequelize.STRING(150),
    otro          : Sequelize.STRING(20),
    calle_avenida : Sequelize.TEXT,
    esquina : Sequelize.TEXT,
    numero : Sequelize.INTEGER,
    edificio_apartamento_residencial : Sequelize.TEXT,
    urbanizacion : Sequelize.TEXT,
    idpais : Sequelize.INTEGER,
    idprovincia : Sequelize.INTEGER,
    idmunicipio : Sequelize.INTEGER,
    iddistrito : Sequelize.INTEGER,
    fecha_creacion : Sequelize.DATE,
    id_paciente : Sequelize.INTEGER,
},{
    timestamps: false,
    tableName: 'contacto'
});

module.exports.contacto = contacto;