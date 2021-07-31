require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      database: process.env.DATABASE_NAME,
      password: process.env.DATABASE_PASSWORD,
      user: process.env.DATABASE_USER,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "migrations",
    },
  },

  staging: {
    client: "pg",
    connection: {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      database: process.env.DATABASE_NAME,
      password: process.env.DATABASE_PASSWORD,
      user: process.env.DATABASE_USER,
    },
    pool: {
      min: 2,
      max: 50,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "migrations",
    },
  },

  production: {
    client: "pg",
    connection: {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      database: process.env.DATABASE_NAME,
      password: process.env.DATABASE_PASSWORD,
      user: process.env.DATABASE_USER,
    },
    pool: {
      min: 2,
      max: 50,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "migrations",
    },
  },
};
