import { Maybe } from "graphql/jsutils/Maybe"
import { SemesterType, TestCase, UserRole, TestCaseResult, MetaTestCase } from "../graphql/generated/graphql"

export const classNames = (...classes: string[]) => classes.filter(Boolean).join(" ")

export type Style = { [key: string]: string | Style }

/**
 * Merges a default style with elements of a custom one
 * @param defaultStyle An object with the default style
 * @param style An object with the custom style
 * @param className (optional) an array with the current classNames
 * @returns An object with style (the merged object) and className (an array with the string styles in the object)
 */
export const getStyle = (defaultStyle: Style, style: Style, className: string[] = []) => {
  const newStyle: Style = {}
  Object.entries(defaultStyle).forEach(([key, value]) => {
    if (typeof value === "object") {
      if (key in style && typeof style[key] === "object") {
        newStyle[key] = getStyle(value, style[key] as Style, className).style
      } else {
        getStyle(value, {}, className)
      }
    } else {
      const newClassName = (key in style ? style[key] : value) as string
      newStyle[key] = newClassName
      if (typeof value === "string") {
        className.push(newClassName)
      }
    }
  })

  return { style: newStyle, className }
}

export const semesterLabel = (semester: SemesterType) => {
  switch (semester) {
    case SemesterType.First:
      return "Primero"
    case SemesterType.Second:
      return "Segundo"
    case SemesterType.Summer:
      return "Verano"
    default:
      break
  }
}

export const userRoleLabel = (userRole: UserRole) => {
  switch (userRole) {
    case UserRole.Teacher:
      return "Profesor"
    case UserRole.ContentCreator:
      return "Ayudante Creador"
    case UserRole.Student:
      return "Estudiante"
    case UserRole.TeacherAssistant:
      return "Ayudante"
    default:
      return ""
  }
}

export const testCasesMapper = (
  publicTestCases: Maybe<TestCase[]> | undefined,
  secretTestCases: Maybe<TestCase[]> | undefined
) => {
  let cleanPublicTestcases = publicTestCases?.sort((testCase1, testCase2) => testCase1.number - testCase2.number)
  cleanPublicTestcases = publicTestCases?.map((testCase: TestCase, index) => {
    const numberedTestCase = testCase
    numberedTestCase.number = index + 1
    return numberedTestCase
  })
  let cleanSecretTestcases = secretTestCases?.sort((testCase1, testCase2) => testCase1.number - testCase2.number)
  cleanSecretTestcases = secretTestCases?.map((testCase: TestCase, index) => {
    const numberedTestCase = testCase
    numberedTestCase.number = index + 1
    return numberedTestCase
  })

  const testCases = cleanPublicTestcases?.concat(cleanSecretTestcases || [])
  return testCases
}

export const metaTestCasesMapper = (
  publicMetaTestCases: Maybe<MetaTestCase[]> | undefined,
  secretMetaTestCases: Maybe<MetaTestCase[]> | undefined
) => {
  let cleanPublicMetaTestcases = publicMetaTestCases?.sort(
    (metaTestCase1, metaTestCase2) => metaTestCase1.number - metaTestCase2.number
  )
  cleanPublicMetaTestcases = publicMetaTestCases?.map((metaTestCase: MetaTestCase, index) => {
    const numberedMetaTestCase = metaTestCase
    numberedMetaTestCase.number = index + 1
    return numberedMetaTestCase
  })
  let cleanSecretMetaTestcases = secretMetaTestCases?.sort(
    (metaTestCase1, metaTestCase2) => metaTestCase1.number - metaTestCase2.number
  )
  cleanSecretMetaTestcases = secretMetaTestCases?.map((metaTestCase: MetaTestCase, index) => {
    const numberedMetaTestCase = metaTestCase
    numberedMetaTestCase.number = index + 1
    return numberedMetaTestCase
  })

  const metaTestCases = cleanPublicMetaTestcases?.concat(cleanSecretMetaTestcases || [])
  return metaTestCases
}

export const resultTestCasesMapper = (
  publicResultTestCases: Maybe<TestCaseResult[]> | undefined,
  secretResultTestCases: Maybe<TestCaseResult[]> | undefined
) => {
  let cleanPublicResultTestcases = publicResultTestCases?.sort(
    (ResultTestCase1, ResultTestCase2) => ResultTestCase1.testCase.number - ResultTestCase2.testCase.number
  )
  cleanPublicResultTestcases = publicResultTestCases?.map((testCaseResult: TestCaseResult, index) => {
    const numberedResultTestCase = testCaseResult
    numberedResultTestCase.testCase.number = index + 1
    return numberedResultTestCase
  })
  let cleanSecretResultTestcases = secretResultTestCases?.sort(
    (ResultTestCase1, ResultTestCase2) => ResultTestCase1.testCase.number - ResultTestCase2.testCase.number
  )
  cleanSecretResultTestcases = secretResultTestCases?.map((testCaseResult: TestCaseResult, index) => {
    const numberedResultTestCase = testCaseResult
    numberedResultTestCase.testCase.number = index + 1
    return numberedResultTestCase
  })

  const testCasesResult = cleanPublicResultTestcases?.concat(cleanSecretResultTestcases || [])
  return testCasesResult
}
