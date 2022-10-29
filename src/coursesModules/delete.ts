import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

(async function main() {
    const result = await prisma.coursesModules.delete({
        where: {
            id: "3498ebfd-a09c-42fa-8829-202c208c9d76"
        }
    })

    console.log(result)
}())