import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

(async function main() {
    const result = await prisma.courses.update({
        where: {
            id: "ed5086eb-7f36-41df-876d-0e992c4ce20f"
        },
        data: {
            duration: 100,
            name: "Curso Prisma",
            description: "Curso prisma.io"
        }
    })

    console.log(result);
}())