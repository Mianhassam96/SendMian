import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Only initialize Prisma if DATABASE_URL is provided
let db: PrismaClient | null = null

try {
  if (process.env.DATABASE_URL) {
    db = globalForPrisma.prisma ?? new PrismaClient()
    if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db
  }
} catch (error) {
  console.log('Database not configured, running without database')
}

export { db }