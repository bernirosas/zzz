import { printExecutableGraphQLDocument } from "@graphql-tools/documents"
import { loadFilesSync } from "@graphql-tools/load-files"
import { DateTimeTypeDefinition, JSONDefinition } from "graphql-scalars"
import { mergeTypeDefs } from "@graphql-tools/merge"

console.log(printExecutableGraphQLDocument(mergeTypeDefs([
  DateTimeTypeDefinition,
  JSONDefinition,
  ...loadFilesSync("./src/modules/**/*.graphql"),
])))