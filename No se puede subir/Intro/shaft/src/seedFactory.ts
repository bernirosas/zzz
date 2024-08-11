/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
// seed example from: https://github.com/prisma/prisma-examples/blob/latest/typescript/graphql/prisma/seed.ts
import { Prisma, PrismaClient, UserRole } from "@prisma/client"
// Import data and generator functions from the seeds folder
import { users, generateUsers } from "seeds/users"
import { courses, generateCourses } from "seeds/courses"
import { semesters, generateSemesters } from "seeds/semesters"
import { sections, generateSections } from "seeds/sections"
import { usersOnSemester, generateUsersOnSemester } from "seeds/usersOnSemester"
import { enrollments, generateEnrollments } from "seeds/enrollments"
import { metaQuestions, generateMetaQuestions } from "~/seeds/metaQuestions"
import { evaluations, generateEvaluations } from "seeds/evaluations"
import { questions, generateQuestions } from "seeds/questions"
import { sectionEvaluations, generateSectionEvaluations } from "seeds/sectionEvaluations"
import { testCases, generateTestCases } from "seeds/testCases"
import { announcements } from "./seeds/announcements"
import { sectionAnnouncements } from "./seeds/sectionAnnouncements"
import { studentEvaluationStates } from "./seeds/studentEvaluationState"
import { studentQuestionStates } from "./seeds/studentQuestionState"
import { studentQuestionSubmissions } from "./seeds/studentQuestionSubmissions"
import { testCaseResults } from "./seeds/testCaseResults"
import { seedsConfig } from "./seeds"

// Get the users from the environment variables
const LOCAL_SEED_ADMIN_NAME = (process.env.LOCAL_SEED_USER_NAME?.split(",") as string[]) || null
const LOCAL_SEED_ADMIN_EMAIL = (process.env.LOCAL_SEED_USER_EMAIL?.split(",") as string[]) || null

// Counter of custom values
const customUsers = users.length
const customCourses = courses.length
const customSemesters = semesters.length
const customSections = sections.length
const customUsersOnSemester = usersOnSemester.length
const customEvaluations = evaluations.length
const customQuestions = questions.length

// 1. Users data
let userData = users as Prisma.UserCreateInput[]
// Add the local admins to the users data
const initialAdminId = userData.length
userData = [
  ...userData,
  ...Array.from({ length: LOCAL_SEED_ADMIN_EMAIL.length }, (_, i) => {
    return {
      id: (initialAdminId + i + 1).toString(),
      name: LOCAL_SEED_ADMIN_NAME[i],
      email: LOCAL_SEED_ADMIN_EMAIL[i],
      isSuperAdmin: true,
    }
  }),
]
// Add generated users to the users data
userData = generateUsers(seedsConfig.nUsers, userData)

// 2. Courses data
let courseData: Prisma.CourseCreateInput[] = courses
// Add generated courses to the courses data
courseData = generateCourses(seedsConfig.nCourses, courseData)

// 3. Semesters data
let semesterData: Prisma.SemesterCreateInput[] = semesters as Prisma.SemesterCreateInput[]
// Add generated semesters to the semesters data
seedsConfig.nSemestersPerCourse.forEach((nSemesters, courseId) => {
  semesterData = generateSemesters(nSemesters, customCourses + courseId + 1, semesterData)
})
// 4. Sections data
let sectionData: Prisma.SectionCreateInput[] = sections as Prisma.SectionCreateInput[]
// Index of the semester in the semester data
let globalSemesterIndex = customSemesters + 1

// Add generated sections to the sections data
seedsConfig.nSectionsPerSemesterPerCourse?.forEach((nSectionsPerSemester) => {
  nSectionsPerSemester?.forEach((nSections, localSemesterId) => {
    sectionData = generateSections(nSections, globalSemesterIndex + localSemesterId, sectionData)
  })
  globalSemesterIndex += nSectionsPerSemester.length
})
// Reset the semester index
globalSemesterIndex = customSemesters + 1

// 5. Users on semester data
let usersOnSemesterData: Prisma.UsersOnSemesterCreateInput[] = usersOnSemester as Prisma.UsersOnSemesterCreateInput[]
// Add generated users on semester to the users on semester data
let globalUserOnSemesterIndex = customUsersOnSemester + LOCAL_SEED_ADMIN_EMAIL.length + 1 // Admins does not count for enrollments
seedsConfig.nUsersOnSemesterPerCourse.forEach((nUsersOnSemester) => {
  nUsersOnSemester.forEach((usersOnThisSemester, localSemesterId) => {
    usersOnThisSemester.forEach((userOnSemester) => {
      usersOnSemesterData = generateUsersOnSemester(
        userOnSemester.nUsers,
        globalSemesterIndex + localSemesterId,
        userOnSemester.role as UserRole,
        usersOnSemesterData,
        globalUserOnSemesterIndex // Admins does not count for enrollments
      ) as Prisma.UsersOnSemesterCreateInput[]
    })
    globalUserOnSemesterIndex += usersOnSemester.length
  })
  globalSemesterIndex += nUsersOnSemester.length
})
// Reset the semester index
globalSemesterIndex = customSemesters
// Reset the user on semester index
globalUserOnSemesterIndex = customUsersOnSemester + LOCAL_SEED_ADMIN_EMAIL.length + 1 // Admins does not count for enrollments

// 6. Users on section data
let usersOnSectionData: Prisma.UsersOnSectionCreateInput[] = enrollments as Prisma.UsersOnSectionCreateInput[]
// Add generated users on section to the users on section data
let globalSectionIndex = customSections + 1
seedsConfig.nEnrollmentsPerSectionPerSemesterPerCourse.forEach((nEnrollmentsPerCourse) => {
  nEnrollmentsPerCourse.forEach((nEnrollmentsPerSemester) => {
    nEnrollmentsPerSemester.forEach((nEnrollments, localSectionId) => {
      nEnrollments.forEach((nEnrollment) => {
        usersOnSectionData = generateEnrollments(
          nEnrollment.nUsers,
          globalSectionIndex + localSectionId,
          nEnrollment.role as UserRole,
          usersOnSectionData,
          customUsers + (usersOnSemesterData.length - usersOnSemester.length) + LOCAL_SEED_ADMIN_EMAIL.length + 1 // Admins does not count for enrollments
        ) as Prisma.UsersOnSectionCreateInput[]
      })
    })
    globalSectionIndex += nEnrollmentsPerSemester.length
  })
})
// Reset the section index
globalSectionIndex = customSections + 1

// 7. MetaQuestions data
let metaQuestionData: Prisma.MetaQuestionCreateInput[] = metaQuestions as Prisma.MetaQuestionCreateInput[]
// Add generated meta questions to the meta questions data
seedsConfig.nMetaQuestionsPerCourse.forEach((nMetaQuestions, courseId) => {
  metaQuestionData = generateMetaQuestions(nMetaQuestions, customCourses + courseId + 1, metaQuestionData)
})

// 8. Evaluations data
let evaluationData: Prisma.EvaluationCreateInput[] = evaluations as Prisma.EvaluationCreateInput[]
// Add generated evaluations to the evaluations data
seedsConfig.nEvaluationsPerCourse.forEach((nEvaluations, courseId) => {
  evaluationData = generateEvaluations(
    nEvaluations.Evaluation,
    customCourses + courseId + 1,
    "Evaluation",
    evaluationData
  )
  evaluationData = generateEvaluations(nEvaluations.Homework, customCourses + courseId + 1, "Homework", evaluationData)
  evaluationData = generateEvaluations(nEvaluations.Quiz, customCourses + courseId + 1, "Quiz", evaluationData)
})

// 9. Questions data
let questionData: Prisma.QuestionCreateInput[] = questions as Prisma.QuestionCreateInput[]
// Add generated questions to the questions data
let globalEvaluationIndex = customEvaluations + 1
seedsConfig.nQuestionsPerEvaluationPerCourse.forEach((nQuestionsPerEvaluation) => {
  nQuestionsPerEvaluation.forEach((nQuestions, localEvaluationId) => {
    questionData = generateQuestions(nQuestions, globalEvaluationIndex + localEvaluationId, questionData)
  })
  globalEvaluationIndex += nQuestionsPerEvaluation.length
})

// 10. Section evaluations data
let sectionEvaluationData: Prisma.SectionEvaluationCreateInput[] =
  sectionEvaluations as Prisma.SectionEvaluationCreateInput[]
// [ToDo]: allow customizations to generated section evaluations ( different times, different questions, etc. )

// Add generated section evaluations to the section evaluations data, for now we generate section evaluations for all sections
evaluationData.forEach((evaluation, index) => {
  if (index >= customEvaluations) {
    const targetCourse = courseData.find((course) => course.id === evaluation.course.connect?.id)
    const semestersOfCourse = semesterData.filter((semester) => semester.course.connect?.id === targetCourse?.id)
    const sectionsOfCourse = sectionData.filter((section) => section.semester.connect?.id === semestersOfCourse[0].id)
    sectionsOfCourse.forEach((section) => {
      sectionEvaluationData = generateSectionEvaluations(
        1,
        parseInt(section.id || "0", 10),
        parseInt(evaluation.id || "0", 10),
        sectionEvaluationData
      )
    })
  }
})

// 11. Test cases data
let testCaseData: Prisma.TestCaseCreateInput[] = testCases as Prisma.TestCaseCreateInput[]
// Add generated test cases to the test cases data
let globalQuestionIndex = customQuestions + 1
seedsConfig.nTestCasesPerQuestionPerEvaluationPerCourse.forEach((nTestCasesPerCourse) => {
  nTestCasesPerCourse.forEach((nTestCasesPerEvaluation) => {
    nTestCasesPerEvaluation.forEach((nTestCases, localQuestionId) => {
      testCaseData = generateTestCases(
        nTestCases,
        globalQuestionIndex + localQuestionId,
        Math.floor(nTestCases / 2), // Half of the test cases are public
        testCaseData
      )
    })
    globalQuestionIndex += nTestCasesPerEvaluation.length
  })
})

// 12. Announcements data
const announcementData: Prisma.AnnouncementCreateInput[] = announcements as Prisma.AnnouncementCreateInput[]
// [ToDo]: add generated announcements to the announcements data

// 12.1. Section announcements data
const sectionAnnouncementData: Prisma.SectionAnnouncementCreateInput[] =
  sectionAnnouncements as Prisma.SectionAnnouncementCreateInput[]

// 13. Student evaluations state data
const studentEvaluationStateData: Prisma.StudentEvaluationStateCreateInput[] =
  studentEvaluationStates as Prisma.StudentEvaluationStateCreateInput[]
// [ToDo]: add generated student evaluation states to the student evaluation states data

// 14. Student Question State data
const studentQuestionStateData: Prisma.StudentQuestionStateCreateInput[] =
  studentQuestionStates as Prisma.StudentQuestionStateCreateInput[]
// [ToDo]: add generated student question states to the student question states data

// 15. Student Question Submission data
const studentQuestionSubmissionData: Prisma.StudentQuestionSubmissionCreateInput[] =
  studentQuestionSubmissions as Prisma.StudentQuestionSubmissionCreateInput[]
// [ToDo]: add generated student question submissions to the student question submissions data

// 16. Student Test Case Result data
const testCaseResultData: Prisma.TestCaseResultCreateInput[] = testCaseResults as Prisma.TestCaseResultCreateInput[]
// [ToDo]: add generated test case results to the test case results data

let seeded = false

async function clearDatabase(client: PrismaClient) {
  console.info("Clearing database")
  // @ts-expect-error -- Access all models mapping
  // eslint-disable-next-line no-underscore-dangle
  const models = Object.keys(client._dmmf.mappingsMap)

  const promises = models.map((model) => {
    // Names formatted like `AccessRight`, we need `accessRight` for the orm call
    const name = model.charAt(0).toLowerCase() + model.slice(1)

    // @ts-expect-error -- Delete models by name
    return client[name].deleteMany()
  })

  await Promise.all(promises)
  seeded = false
}

/**
 * Populate the database with the data previously defined
 */
export async function seedFactory(prisma: PrismaClient, deleteBeforeCreate = false) {
  if (!seeded) {
    if (deleteBeforeCreate) {
      clearDatabase(prisma)
    }
    console.info(`Start seeding ...`)

    const { count: nUsers } = await prisma.user.createMany({ data: userData })
    console.info(`Created ${nUsers} users`)

    // Just seed users in production
    if (process.env.NODE_ENV !== "production") {
      const { count: nCourses } = await prisma.course.createMany({ data: courseData })
      console.info(`Created ${nCourses} courses`)

      for (const data of semesterData) {
        const ins = await prisma.semester.create({ data })
        console.info(`Created instance with id: ${ins.id}`)
      }
      for (const data of sectionData) {
        const ins = await prisma.section.create({ data })
        console.info(`Created section with id: ${ins.id}`)
      }
      for (const data of usersOnSectionData) {
        const ins = await prisma.usersOnSection.create({ data })
        console.info(`Created usersOnSection with id: ${ins.id}`)
      }
      for (const data of usersOnSemesterData) {
        const ins = await prisma.usersOnSemester.create({ data })
        console.info(`Created usersOnSemester with id: ${ins.id}`)
      }

      for (const data of evaluationData) {
        const ins = await prisma.evaluation.create({ data })
        console.info(`Created evaluation with id: ${ins.id}`)
      }

      for (const data of metaQuestionData) {
        const ins = await prisma.metaQuestion.create({ data })
        console.info(`Created metaQuestion with id: ${ins.id}`)
      }

      for (const data of questionData) {
        const ins = await prisma.question.create({ data })
        console.info(`Created question with id: ${ins.id}`)
      }

      for (const data of announcementData) {
        const ins = await prisma.announcement.create({ data })
        console.info(`Created announcement with id: ${ins.id}`)
      }

      for (const data of sectionAnnouncementData) {
        const ins = await prisma.sectionAnnouncement.create({ data })
        console.info(`Created sectionAnnouncement with id: ${ins.id}`)
      }

      for (const data of sectionEvaluationData) {
        const ins = await prisma.sectionEvaluation.create({ data })
        console.info(`Created sectionEvaluation with id: ${ins.id}`)
      }

      for (const data of testCaseData) {
        const ins = await prisma.testCase.create({ data })
        console.info(`Created testCase with id: ${ins.id}`)
      }

      for (const data of studentEvaluationStateData) {
        const ins = await prisma.studentEvaluationState.create({ data })
        console.info(`Created studentEvaluationState with id: ${ins.id}`)
      }

      for (const data of studentQuestionStateData) {
        const ins = await prisma.studentQuestionState.create({ data })
        console.info(`Created studentQuestionState with id: ${ins.id}`)
      }

      for (const data of studentQuestionSubmissionData) {
        const ins = await prisma.studentQuestionSubmission.create({ data })
        console.info(`Created studentQuestionSubmission with id: ${ins.id}`)
      }

      for (const data of testCaseResultData) {
        const ins = await prisma.testCaseResult.create({ data })
        console.info(`Created testCaseResult with id: ${ins.id}`)
      }

      seeded = true
      console.info(`Seeding finished.`)
    }
  } else {
    console.info("Database already seeded")
  }
}
