import { createServer } from "~/server"

export async function startServer() {
  const server = createServer()
  const info = await server.listen({ port: process.env.PORT || 4000 })
  try {
    console.info(`🚀 Server ready at ${info.url}`)
  } catch (e) {
    console.warn(e)
  }
}
startServer()
