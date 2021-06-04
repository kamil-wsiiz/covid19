['NODE_ENV', 'PORT', 'DATABASE_STRING'].forEach((name: string) => {
  if (!process.env[name]) {
    throw new Error(`Environment variable ${name} is missing`)
  }
})

const config = {
  app: {
    env: process.env.NODE_ENV,
    server: {
      port: Number(process.env.PORT)
    }
  },
  database: {
    connectionString: process.env.DATABASE_STRING
  }
}

export const { app, database } = config
export default config
