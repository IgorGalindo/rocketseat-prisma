import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

(async function main() {
    const result = await prisma.courses.createMany({
        data: [
            {
                duration: 500,
                name: "Curso NodeJS",
                description: "Curso node.js"
            },
            {
                duration: 500,
                name: "Curso React",
                description: "Curso react"
            },
            {
                duration: 100,
                name: "Curso TypeScript",
                description: "Curso typescript"
            }
        ]
    });

    console.log(result);
}())