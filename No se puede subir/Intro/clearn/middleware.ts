// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextResponse, NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl
  if (pathname === "/api/auth/callback/auth0" && searchParams.get("error") === "unauthorized") {
    const error = encodeURI(searchParams.get("error_description") as string)
    return NextResponse.redirect(`/error?error=${error}`)
  }
  return NextResponse.next()
}
