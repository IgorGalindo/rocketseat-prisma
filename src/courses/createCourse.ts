import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

(async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "Curso de Java",
            duration: 500,
            description: "Curso de Java",
            teacher: {
                connectOrCreate: {
                    where: {
                        name: "Professor 1"
                    },
                    create: {
                        name: "Professor 1"
                    }
                }
            }
        }
    })

    console.log(result);
}())