import {
  AcademicCapIcon,
  UsersIcon,
  RectangleStackIcon,
  HomeIcon,
  UserIcon,
  Bars4Icon,
  CodeBracketIcon,
  BookOpenIcon,
  BookmarkSquareIcon,
  ClipboardDocumentListIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline"
import { VerticalBarItem } from "~/components/UIBlocks/NavbarVertical"

type Question = {
  id: string
}
type SectionNav = (
  courseId: string,
  semesterId: string,
  sectionId: string,
  current: "dash" | "announcements" | "calendar" | "evaluations" | "grades" | "people" | string,
  notSeenAnnouncements: number,
  showAnnouncements?: boolean,
) => VerticalBarItem[]
type MainNav = VerticalBarItem[]
type EvaluationNav = (
  userId: string,
  courseId: string,
  semesterId: string,
  sectionId: string,
  evaluationId: string,
  sectionEvaluationId: string,
  current: "instructions" | "review" | string,
  questions: Question[],
  adminStatus: boolean,
  studentState?: string,
  timeLimit?: number,
  manageStatus?: boolean,
  showTimer?: boolean,
  submissionsAccess?: boolean
) => VerticalBarItem[]

type SemesterNav = (courseId: string, semesterId: string, current: string) => VerticalBarItem[]

type CourseNav = (courseId: string, current: "info" | "questions", isStudent: boolean) => VerticalBarItem[]
type AdminNav = (current: "admins" | "courses") => VerticalBarItem[]

/**
 * Create the navigation sidebar links for a specific course with a selected menu
 * @param courseId id of the course section selected
 * @param current the current navigation menu selected
 * @returns Array of the navigator menu links
 */
export const sectionNav: SectionNav = (courseId, semesterId, sectionId, current, notSeenAnnouncements, showAnnouncements) => [
  {
    type: "Link",
    link: {
      name: "Dashboard",
      icon: HomeIcon,
      href: `/app/courses/${courseId}/semesters/${semesterId}/sections/${sectionId}`,
      current: current === "dash",
      count: 1,
    },
  },
  ...(showAnnouncements
    ? [
        {
          type: "Link",
          link: {
            name: "Anuncios",
            icon: MegaphoneIcon,
            href: `/app/courses/${courseId}/semesters/${semesterId}/sections/${sectionId}/announcements`,
            current: current === "announcements",
            count: notSeenAnnouncements,
          },
        } as VerticalBarItem,
      ]
    : []),
  {
    type: "Link",
    link: {
      name: "Personas",
      icon: UserIcon,
      href: `/app/courses/${courseId}/semesters/${semesterId}/sections/${sectionId}/people`,
      current: current === "people",
    },
  },
]

export const adminNav: AdminNav = (current) => [
  {
    type: "Link",
    link: {
      name: "Administradores",
      icon: UsersIcon,
      href: `/app/superAdmin`,
      current: current === "admins",
    },
  },
  {
    type: "Link",
    link: {
      name: "Administrar Cursos",
      icon: AcademicCapIcon,
      href: `/app/courses`,
      current: current === "courses",
    },
  },
]

export const evaluationNav: EvaluationNav = (
  userId,
  courseId,
  semesterId,
  sectionId,
  evaluationId,
  sectionEvaluationId,
  current,
  questions,
  adminStatus,
  studentState,
  timeLimit,
  manageStatus,
  showTimer
) => {
  const navigation: VerticalBarItem[] = []
  const manage: VerticalBarItem = {
    type: "Link",
    link: {
      name: "Administrar",
      icon: BookmarkSquareIcon,
      href: `/app/evaluations/${evaluationId}/manage`,
      current: current === "manage",
      count: 0,
      hiddenIcon: false,
    },
  }

  const instructions: VerticalBarItem = {
    type: "Link",
    link: {
      name: "Instrucciones",
      icon: BookOpenIcon,
      href: `/app/evaluations/${evaluationId}/instructions`,
      current: current === "instructions",
      count: 0,
      hiddenIcon: false,
    },
  }
  const review: VerticalBarItem = {
    type: "Link",
    link: {
      name: "Revisar",
      icon: Bars4Icon,
      href: `/app/evaluations/${evaluationId}/questions/review`,
      current: current === "review",
      count: 0,
      hiddenIcon: false,
    },
  }

  if (adminStatus) {
    navigation.push(manage)
  }
  if (manageStatus) {
    navigation.push(
      ...questions.map((question, number) => {
        return {
          type: "Link",
          link: {
            name: `Pregunta ${number + 1}`,
            collapsedIcon: `P${number + 1}`,
            href: `/app/evaluations/${evaluationId}/manage/questions/${question.id}`,
            current: current === question.id,
            count: 0,
            icon: CodeBracketIcon,
            hiddenIcon: false,
          },
        } as VerticalBarItem
      })
    )
  } else if (current !== "manage" && current !== "submissions") {
    if (studentState === "InProgress") {
      if (showTimer && timeLimit) {
        // if the user is a student, show the timer
        navigation.push({
          type: "TimeOut",
          timeout: {
            timeLimit,
            sectionEvaluationId,
            userId,
          },
        })
      }
      navigation.push(
        instructions,
        ...questions.map((question, number) => {
          return {
            type: "Link",
            link: {
              name: `Pregunta ${number + 1}`,
              collapsedIcon: `P${number + 1}`,
              href: `/app/evaluations/${evaluationId}/questions/${question.id}`,
              current: current === question.id,
              count: 0,
              icon: CodeBracketIcon,
              hiddenIcon: false,
            },
          } as VerticalBarItem
        }),
        review
      )
    } else if (studentState === "Available" || studentState === "AvailableWithCode") {
      navigation.push(instructions)
    } else if (studentState === "Submitted") {
      navigation.push(instructions, review)
    }
  }

  return navigation
}

export const mainNav: MainNav = [
  {
    type: "Link",
    link: {
      name: "Cursos",
      icon: RectangleStackIcon,
      href: "/app",
      current: true,
    },
  },
]

export const semesterNav: SemesterNav = (courseId, semesterId, current) => {
  const navigation = [
    {
      type: "Link",
      link: {
        name: "Información",
        icon: HomeIcon,
        href: `/app/courses/${courseId}/semesters/${semesterId}`,
        current: current === "info",
      },
    } as VerticalBarItem,
    {
      type: "Link",
      link: {
        name: "Personas",
        icon: UserIcon,
        href: `/app/courses/${courseId}/semesters/${semesterId}/people`,
        current: current === "people",
      },
    } as VerticalBarItem,
  ]
  return navigation
}

export const courseNav: CourseNav = (courseId, current, hasMetaQuestionAccess) => {
  const navigation = [
    {
      type: "Link" as const,
      link: {
        name: "Información",
        icon: HomeIcon,
        href: `/app/courses/${courseId || ""}`,
        current: current === "info",
      },
    },
    ...(hasMetaQuestionAccess
      ? [
          {
            type: "Link" as const,
            link: {
              name: "Preguntas",
              icon: ClipboardDocumentListIcon,
              href: `/app/courses/${courseId}/metaQuestions`,
              current: current === "questions",
            },
          },
        ]
      : []),
  ]
  return navigation
}
