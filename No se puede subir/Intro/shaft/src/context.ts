import { PrismaClient, User, UsersOnSection, UsersOnSemester } from "@prisma/client"
import { AxiosInstance } from "axios"
import { JwtPayload } from "jsonwebtoken"
import sandpit from "./services/sandpit"
import verifyToken from "./verifyToken"

const prisma = new PrismaClient({
  log: process.env.NODE_ENV === "development" ? ["query", "info", "warn", "error"] : [],
})

/**
 * Check if the request has a valid access token and decode it to get the user email.
 *
 * This information is added to the context of the apollo server
 * @param req The request object
 * @returns If the user is authenticated and the user's email
 */
async function isAuthenticated(req: any) {
  let isAuth = false
  const token = req?.headers?.authorization
  if (!token) return { isAuthenticated: isAuth }
  let payload: JwtPayload
  try {
    payload = await verifyToken(token)
  } catch (err) {
    console.error(err)
    return { isAuthenticated: isAuth }
  }
  const email = payload[`${process.env.AUTH0_NAMESPACE}email`]
  isAuth = !!(payload && payload.sub)
  const user = await prisma.user.findUnique({
    where: { email },
    include: {
      usersOnSemester: {
        include: {
          semester: {
            select: {
              sections: { select: { id: true } },
            },
          },
        },
      },
      enrollments: {
        include: {
          section: {
            select: {
              semester: { select: { id: true } },
            },
          },
        },
      },
    },
  })
  if (isAuth && user) return { isAuthenticated: isAuth, user }
  return { isAuthenticated: isAuth }
}

export interface Context {
  /** Prisma client */
  prisma: PrismaClient
  /** Sandpit Axios Instance */
  sandpit: AxiosInstance
  /** If the user making the request is auithenticated */
  isAuthenticated: boolean
  /** data of the logged user */
  user?: User & {
    usersOnSemester?: (UsersOnSemester & { semester: { sections: { id: string }[] } })[]
    enrollments?: (UsersOnSection & { section: { semester: { id: string } } })[]
  }
}

export const context: (ctx: any) => Promise<Context> = async (ctx) => ({
  prisma,
  sandpit,
  ...(await isAuthenticated(ctx.req)),
})
