import { PrismaClient } from "@prisma/client"
import anyTest, { TestFn } from "ava"

export const createClient = () => {
  return new PrismaClient()
}

export function setupTest(test: TestFn<{ prisma: PrismaClient }>) {
  test.before(async (t) => {
    // eslint-disable-next-line no-param-reassign
    t.context.prisma = createClient()
  })

  test.after.always(async ({ context: { prisma } }) => {
    await prisma.$disconnect()
  })

  return test
}

export function getTestInstance() {
  return setupTest(anyTest as TestFn<{ prisma: PrismaClient }>)
}
