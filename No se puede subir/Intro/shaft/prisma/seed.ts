/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
// seed example from: https://github.com/prisma/prisma-examples/blob/latest/typescript/graphql/prisma/seed.ts
import { PrismaClient } from "@prisma/client"
import { seedFactory } from "~/seedFactory"

const prisma = new PrismaClient()

seedFactory(prisma)
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
