import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

(async function main() {
    const result = await prisma.courses.create({
        data: {
            duration: 200,
            name: "Curso Prisma NodeJS",
            description: "Curso prisma com node.js"
        }
    });

    console.log(result);
}())