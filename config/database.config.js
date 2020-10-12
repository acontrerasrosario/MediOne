module.exports = {
    APPDB: {
        host: process.env.APP_DB_SERVER,
        database: process.env.APP_DB_NAME,
        user: process.env.APP_DB_USER,
        password: process.env.APP_DB_PASS,
        port: process.env.APP_DB_PORT,
        MaxConcurrentQueries: process.env.APP_DB_MAX_CONCURRENT_QUERIES,
        poolMin: process.env.APP_DB_POOL_MIN,
        poolMax: process.env.APP_DB_POOL_MAX,
        poolRequire: process.env.APP_DB_POOL_REQUIRE,
        poolIdle: process.env.APP_DB_POOL_IDLE,
        logging: process.env.APP_DB_LOG,
    }
}