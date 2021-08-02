const defaultConfig = {
  client: 'pg',
  connection: {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    user: process.env.DATABASE_USER,
    timezone: 'UTC',
  },
  pool: {
    min: 2,
    max: 50,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: 'migrations',
  },
}

interface KnexConfig {
  [key: string]: Record<string, unknown>
}

const config: KnexConfig = {
  development: {
    ...defaultConfig,
  },
  staging: {
    ...defaultConfig,
  },
  production: {
    ...defaultConfig,
  },
}

export default config
