import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

(async function main() {
    const result = await prisma.modules.findMany({
        where: {
            id: "47522bf9-ce46-4da4-8472-09a464243f55"
        },
        include: {
            coursesModules: {
                select: {
                    course: true
                }
            }
        }
    })

    console.log(JSON.stringify(result))
}())