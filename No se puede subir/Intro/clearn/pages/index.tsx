/* eslint-disable react/jsx-props-no-spreading */
import type { GetServerSideProps, NextPage } from "next"
import useAuth from "~/lib/hooks/useAuth"
import type { UserSession } from "~/lib/userSession"
import Head from "next/head"
import Link from "next/link"
import { signIn } from "next-auth/react"
import NavbarHorizontal from "~/components/UIBlocks/NavbarHorizontal"
import LoadingSpinner from "~/components/UIBlocks/Elements/LoadingSpinners/LoadingSpinner"
import CondensedNotification from "~/components/UIBlocks/Elements/Notifications/CondensedNotification"
import { ExclamationCircleIcon } from "@heroicons/react/24/outline"
import { classNames } from "~/lib/componentUtils"
import graphqlRequestClient from "~/lib/clients/graphqlRequestClient"
import { HasAccessTo, RolesType } from "~/lib/providers/userRoleProvider"

export type NavigationList = {
  name: string
  href: string
  current: boolean
}[]

const navigation: NavigationList = []

/* It might be better to, somehow, use this dinamic link generator to redirect upon login */
const DashboardLink = (userRole: RolesType) => {
  const dashboardLink = userRole === "SuperAdmin" ? "/app/courses" : "/app"
  return dashboardLink
}

const signInAndRedirect = () => signIn("auth0", { callbackUrl: "/" }, { prompt: "login" })

export const ServerErrorIcon = (props: React.ComponentProps<"svg">) => (
  // eslint-disable-next-line react/destructuring-assignment
  <ExclamationCircleIcon {...props} className={classNames(props.className || "", "text-red-500")} />
)

const Hero = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const { sessionLoading } = useAuth(true)
  const { userRole, loading } = HasAccessTo({})

  let button: JSX.Element
  if (sessionLoading) {
    button = <LoadingSpinner styles="inline w-14 h-14 text-gray-200 animate-spin fill-purple-600" />
  } else if (isLoggedIn) {
    if (loading) {
      button = <LoadingSpinner styles="inline w-14 h-14 text-gray-200 animate-spin fill-purple-600" />
    } else {
      button = (
        <Link href={DashboardLink(userRole as RolesType)}>
          <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10">
            Ir al dashboard
          </a>
        </Link>
      )
    }
  } else {
    button = (
      <button
        type="button"
        onClick={signInAndRedirect}
        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
      >
        Inicia sesión
      </button>
    )
  }

  return (
    <div className="flex-grow my-auto py-16 mx-auto max-w-7xl px-4 sm:py-24 z-10 flex justify-center items-center">
      <div className="text-center">
        <div className="selection:bg-purple-500 selection:text-white">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Crea evaluaciones de</span>{" "}
            <span className="block text-purple-600 xl:inline">programación</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Evalúa el conocimiento en cursos de programación sin preocuparte de cómo programarán los estudiantes
          </p>
        </div>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">{button}</div>
        </div>
      </div>
    </div>
  )
}

const SVGPattern = () => {
  return (
    <div
      className="w-0 absolute overflow-clip hidden sm:block sm:inset-y-0 sm:h-full sm:w-full -z-10"
      aria-hidden="true"
    >
      <div className="max-w-7xl mx-auto ">
        <svg
          className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="f210dbf6-a58d-4871-961e-36d5016a0f49"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
        </svg>
        <svg
          className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
        </svg>
      </div>
    </div>
  )
}

type HomePropsType = {
  isServerRunning: boolean
}

const Home: NextPage<HomePropsType> = ({ isServerRunning }: HomePropsType) => {
  const { data: session } = useAuth(true)
  // When the user exists, the name, mail, and image should exist to
  const user = session?.user as UserSession | undefined

  return (
    <>
      <Head>
        <title>Clearn</title>
      </Head>
      <NavbarHorizontal navigation={navigation} user={user} loginCallback={signInAndRedirect} />
      <main className="overflow-clip flex-grow flex flex-col items-center justify-center">
        <Hero isLoggedIn={!!user} />
        <SVGPattern />
        {!isServerRunning && (
          <CondensedNotification Icon={ServerErrorIcon} color="bg-red-100" text="El servidor no está disponible." />
        )}
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<HomePropsType> = async () => {
  const STATUS_QUERY = `
    query Status {
      status
    }`
  let isServerRunning
  try {
    const res = await graphqlRequestClient.request(STATUS_QUERY)
    isServerRunning = res.status === "OK"
  } catch (error) {
    isServerRunning = false
  }
  return { props: { isServerRunning } }
}

export default Home
