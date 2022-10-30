import { PrismaClient, Courses, Prisma } from '@prisma/client'

const prisma = new PrismaClient();

(async function main() {
    const result = await prisma.$queryRaw`
        SELECT * FROM courses WHERE duration >= 320;
    `
    console.log(result)
}())
