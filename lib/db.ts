// Database connection with graceful fallback
// Only import Prisma if DATABASE_URL is set to avoid build errors

let db: any = null

// Only initialize database if DATABASE_URL is provided
if (process.env.DATABASE_URL) {
  try {
    const { PrismaClient } = require('@prisma/client')
    
    const globalForPrisma = globalThis as unknown as {
      prisma: any | undefined
    }

    db = globalForPrisma.prisma ?? new PrismaClient()
    
    if (process.env.NODE_ENV !== 'production') {
      globalForPrisma.prisma = db
    }
  } catch (error) {
    console.log('Database initialization failed:', error)
    db = null
  }
}

export { db }