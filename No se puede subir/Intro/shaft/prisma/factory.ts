import { faker } from "@faker-js/faker"
import { SemesterType, EvaluationType, ProgrammingLanguage } from "@prisma/client"

export const createUser = () => ({
  id: faker.random.alphaNumeric(32),
  name: faker.name.findName(),
  email: faker.internet.email(),
})

export const createCourse = () => ({
  id: faker.random.alphaNumeric(32),
  name: faker.company.companyName(),
  description: faker.company.bs(),
})

export const createSemester = () => ({
  id: faker.random.alphaNumeric(32),
  semester: "FIRST" as SemesterType,
  year: 2022,
})

export const createSection = () => ({
  id: faker.random.alphaNumeric(32),
  number: 10,
  name: "Sección 10",
})

export const createEvaluation = () => ({
  id: faker.random.alphaNumeric(32),
  title: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  evaluation: faker.random.arrayElement(["Quiz", "Evaluation", "Homework"]) as EvaluationType,
  maxExtraDays: 10,
  optional: false,
  penalty: 2,
  isUniversal: true,
})

export const createQuestion = () => ({
  id: faker.random.alphaNumeric(32),
  title: faker.company.companyName(),
  code: faker.random.alphaNumeric(8),
  description: faker.company.catchPhrase(),
  programmingLanguage: faker.random.arrayElement(["Python"]) as ProgrammingLanguage,
})

export const createTestCase = (number: number) => ({
  id: faker.random.alphaNumeric(32),
  number,
  input: {},
  expectedOutput: "",
  isPublic: false,
  points: 1,
})

export const createAnnouncement = () => ({
  id: faker.random.alphaNumeric(32),
  title: faker.company.catchPhrase(),
  description: faker.company.catchPhrase(),
})
