import { defineConfig } from "cypress"

import dotenv from "dotenv"

dotenv.config()

export default defineConfig({
  e2e: {
    setupNodeEvents(/* on, config */) {
      // implement node event listeners here
    },
    baseUrl: process?.env?.TESTING_BASE_URL || "http://localhost:3001",
    video: false,
  },
  env: {
    ADMIN_EMAIL: process?.env?.TEST_ADMIN_EMAIL || "",
    ADMIN_PASSWORD: process?.env?.TEST_ADMIN_PASSWORD || "",
    TEACHER_EMAIL: process?.env?.TEST_TEACHER_EMAIL || "",
    TEACHER_PASSWORD: process?.env?.TEST_TEACHER_PASSWORD || "",
    STUDENT_EMAIL: process?.env?.TEST_STUDENT_EMAIL || "",
    STUDENT_PASSWORD: process?.env?.TEST_STUDENT_PASSWORD || "",
    SHAFT_URL: process?.env?.GRAPHQL_TESTING_ENDPOINT || "http://localhost:4002/",
    AUTH0_URL: process?.env?.AUTH0_ISSUER || "",
    AUTH0_CLIENT_ID: process?.env?.AUTH0_CLIENT_ID || "",
    AUTH0_CLIENT_SECRET: process?.env?.AUTH0_CLIENT_SECRET || "",
    AUTH0_AUDIENCE: process?.env?.AUTH0_AUDIENCE || "",
    NEXTAUTH_SECRET: process?.env?.NEXTAUTH_SECRET || "",
  },
})
