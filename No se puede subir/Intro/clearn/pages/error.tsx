import Link from "next/link"
import { signIn } from "next-auth/react"
import type { GetServerSideProps } from "next"

type ErrorProps = {
  error: string | string[]
  json?: string | string[]
  code?: string | string[]
}

const Error = ({ error, json, code }: ErrorProps) => {
  const errorTitle = error instanceof Array ? error[0] : error
  const errorJSON = json instanceof Array ? json[0] : json
  const errorCode = code instanceof Array ? code[0] : code
  return (
    <div className="flex flex-col h-screen items-center">
      <div className="flex flex-col items-center justify-end w-full h-60 bg-slate-100 pb-6">
        <div className="flex mb-6">
          <img className="w-auto h-16" src="/logo.svg" alt="Clearn logo, a C with two bigger than characters inside" />
          <img className="w-auto h-16 ml-2" src="/clearn.svg" alt="clearn" height="140" />
        </div>
        <h2 className="font-medium text-lg">
          {errorCode} {errorTitle.toUpperCase()}
        </h2>
      </div>
      {process.env.NEXT_PUBLIC_VERCEL_ENV !== "production" && errorJSON && (
        <div className="w-full h-auto font-mono p-5 overflow-y-auto break-all prose bg-gray-800 text-gray-200 rounded-xl">
          {errorJSON}
        </div>
      )}
      <div className="my-10 h-32 w-3/4 flex flex-col items-center justify-around md:flex-row md:items-start">
        {code === "401" && (
          <button
            type="button"
            onClick={() => signIn("auth0", { callbackUrl: "/app/" }, { prompt: "login" })}
            className="flex items-center justify-center w-60 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:w-64"
          >
            Inicia sesión
          </button>
        )}
        <Link href="/">
          <a className="flex items-center justify-center w-60 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:w-64">
            Ir a la página de inicio
          </a>
        </Link>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<ErrorProps> = async (ctx) => {
  const { error } = ctx.query
  let { code, json } = ctx.query
  if (!error) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    }
  }
  // Hide the existence of a resource from an unauthorized user.
  code = code === "403" && process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? "404" : code || "401"
  json = json || []
  return {
    props: { error, json, code },
  }
}
export default Error
