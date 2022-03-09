module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  url: process.env.DB_URL,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_USERNAME,
  logging: false,
  entities: [
    "build/models/**/*.ts"
  ],
  migrations: [
    "build/database/migration/**/*.ts"
  ],
  subscribers: [
    "src/subscriber/**/*.ts"
  ],
  cli: {
    entitiesDir: "src/models",
    migrationsDir: "src/database/migration",
    subscribersDir: "src/subscriber"
  }
}