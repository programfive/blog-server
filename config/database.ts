module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ep-noisy-tree-acqv2c5r-pooler.sa-east-1.aws.neon.tech'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'database'),
      user: env('DATABASE_USERNAME', 'database_owner'),
      password: env('DATABASE_PASSWORD', 'npg_v1yEkLM5CJGt'),
      ssl: {
        rejectUnauthorized: false
      },
    },
  },
});