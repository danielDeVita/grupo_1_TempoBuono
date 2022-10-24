module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    // "password": "",
    "database": process.env.DB_NAME,
    // "database": "tempo_buono_new",
    "host": process.env.DB_HOST,
    "dialect": "mysql",
    "port": process.env.DB_PORT
    // "port": "3306"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
