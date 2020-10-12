const { Sequelize } = require('sequelize');
const { APPDB } = require('../config/database.config');
const Op = Sequelize.Op;
const _operatorsAliases = {
  $eq: Op.eq,
  $ne: Op.ne,
  $gte: Op.gte,
  $gt: Op.gt,
  $lte: Op.lte,
  $lt: Op.lt,
  $not: Op.not,
  $in: Op.in,
  $notIn: Op.notIn,
  $is: Op.is,
  $like: Op.like,
  $notLike: Op.notLike,
  $iLike: Op.iLike,
  $notILike: Op.notILike,
  $regexp: Op.regexp,
  $notRegexp: Op.notRegexp,
  $iRegexp: Op.iRegexp,
  $notIRegexp: Op.notIRegexp,
  $between: Op.between,
  $notBetween: Op.notBetween,
  $overlap: Op.overlap,
  $contains: Op.contains,
  $contained: Op.contained,
  $adjacent: Op.adjacent,
  $strictLeft: Op.strictLeft,
  $strictRight: Op.strictRight,
  $noExtendRight: Op.noExtendRight,
  $noExtendLeft: Op.noExtendLeft,
  $and: Op.and,
  $or: Op.or,
  $any: Op.any,
  $all: Op.all,
  $values: Op.values,
  $col: Op.col
};

const sequelize = new Sequelize(APPDB.database, APPDB.user, APPDB.password, 
{
    host: APPDB.host,
    port: APPDB.port,
    maxConcurrentQueries: APPDB.MaxConcurrentQueries,
    dialect: 'postgres',
    omitNull: false, // disable inserting undefined values as NULL 
    allowNull: true,
    pool: { 
        max: parseInt(APPDB.poolMax),
        min: parseInt(APPDB.poolMin), 
        require: parseInt(APPDB.poolRequire), 
        idle: parseInt(APPDB.poolIdle)
    },
    language: 'en',
    logging: false,
    operatorsAliases: _operatorsAliases,
    timezone: "-04:00",
});

module.exports.sequelize = sequelize;