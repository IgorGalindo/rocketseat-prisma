import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

(async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "Curso de React Native",
            duration: 300,
            description: "Curso de react native",
            teacher: {
                connect: {
                    id: "180a262a-b604-4ba2-9df8-808f1b58f493"
                }
            }
        }
    })

    console.log(result);
}())