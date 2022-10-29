import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

(async function main() {
    const result = await prisma.coursesModules.create({
        data: {
            module: {
                create: {
                    name: "DevOps",
                    description: "DevOps"
                }
            },
            course: {
                create: {
                    name: "Curso de Docker",
                    duration: 320,
                    description: "Curso de docker",
                    teacher: {
                        create: {
                            name: "Professor 3"
                        }
                    }
                }
            }
        }
    })

    console.log(result)
}())