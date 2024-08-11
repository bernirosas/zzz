/// <reference types="cypress" />
// https://github.com/cypress-io/cypress-realworld-app/tree/develop/cypress

declare namespace Cypress {
  import { SeedInput } from "~/graphql/generated/graphql"

  interface Chainable {
    login(email: string, password: string): Chainable<void>
    loginAsAdmin(): Chainable<void>
    loginAsTeacher(): Chainable<void>
    loginAsStudent(): Chainable<void>
    shaft(query: string, variables?: any): Chainable<any>
    teardown(): Chainable<any>
    seed(data: SeedInput): Chainable<any>
    resetShaft(data: SeedInput): Chainable<boolean>
    drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
    dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
    visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
  }
}
