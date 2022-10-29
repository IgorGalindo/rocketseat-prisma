import { PrismaClient } from '@prisma/client'
import { createEmitAndSemanticDiagnosticsBuilderProgram } from 'typescript';

const prisma = new PrismaClient();

(async function main() {
    const result = await prisma.authors.create({
        data: {
            name: "Robert C. Martin",
            books: {
                createMany: {
                    data: [
                        { name: "Clean Architecture" },
                        { name: "Clean Code" }
                    ]
                }
            }
        }
    });

    console.log(result);
}())