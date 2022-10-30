import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

(async function main() {

    let skip = 1;

    const result = await prisma.courses.findMany({
        skip: skip,
        take: 2
    })

    console.log(result)
}())
