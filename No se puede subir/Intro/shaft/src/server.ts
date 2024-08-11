import * as path from "path"
import { loadFilesSync } from "@graphql-tools/load-files"
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge"
import { mergeSchemas } from "@graphql-tools/schema"
import { IResolvers } from "@graphql-tools/utils"
import { applyMiddleware } from "graphql-middleware"

import { DateTimeTypeDefinition, DateTimeResolver, JSONDefinition, JSONResolver } from "graphql-scalars"

import { ApolloServer } from "apollo-server"
import { GraphQLRequestContext } from "apollo-server-core"

import { context } from "./context"

import { permissions } from "./permissions/index"

export const schema = mergeSchemas({
  typeDefs: mergeTypeDefs([
    DateTimeTypeDefinition,
    JSONDefinition,
    ...loadFilesSync(path.join(__dirname, "**/*.graphql")),
  ]),
  resolvers: mergeResolvers([
    { DateTime: DateTimeResolver },
    { JSON: JSONResolver },
    ...loadFilesSync<IResolvers>(path.join(__dirname, "modules/**/*.resolvers.ts")),
  ]),
})

const decoratedSchema = applyMiddleware(schema, permissions)

const BASIC_LOGGING = {
  async requestDidStart(requestContext: GraphQLRequestContext) {
    const requestHash = (+new Date()).toString(36)

    console.info(
      `[${requestHash}] `,
      `Request started. Issued by ${
        requestContext.context.user ? requestContext.context.user.email : "unregistered user"
      } `
    )
    const reqStart = process.hrtime.bigint()

    console.info(`[${requestHash}] `, "Query: ", requestContext.request.query)
    console.info(`[${requestHash}] `, "Variables: ", requestContext.request.variables)
    return {
      async didEncounterErrors(errorsContext: any) {
        console.error(`[${requestHash}] `, "Query errors detected!")
        console.error(`[${requestHash}] `, "Error trace: ", errorsContext.errors)
      },
      async willSendResponse(responseContext: any) {
        const reqEnd = process.hrtime.bigint()
        console.info(
          `[${requestHash}] `,
          `Request finished. Execution time was: ${Number((reqEnd - reqStart) * BigInt(100000000)) * 10 ** -17}s`
        )
        console.info(`[${requestHash}] `, "Response data sent: ", responseContext.response.data)
      },
    }
  },
}

export function createServer(): ApolloServer {
  return new ApolloServer({
    schema: decoratedSchema,
    context,
    plugins: [BASIC_LOGGING],
  })
}
