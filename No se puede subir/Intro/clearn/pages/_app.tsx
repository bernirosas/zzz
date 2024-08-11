/* eslint-disable react/jsx-props-no-spreading */

import "~/styles/globals.css"
import type { ReactElement, ReactNode } from "react"
import { useState, useEffect } from "react"
import type { NextPage } from "next"
import type { AppProps } from "next/app"
import { SessionProvider } from "next-auth/react"
import RefreshTokenHandler from "~/components/Auth/RefreshTokenHandler"
import Head from "next/head"
import { QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { registerLocale, setDefaultLocale } from "react-datepicker"
import es from "date-fns/locale/es"
import UserProvider from "~/lib/providers/sessionProvider"
import NavigationProvider from "~/lib/providers/navigationProvider"
import { BreadCrumbProvider } from "~/lib/providers/breadcrumbProvider"
import "~/lib/react-markdown/index.css"
import { useRouter } from "next/router"
import { ReactQueryClient } from "~/lib/clients/reactQueryClient"
import { CustomToaster } from "~/components/UIBlocks/Elements/Notifications/CutsomToaster"
import dynamic from "next/dynamic"
import { getAndSetServerOffset } from "~/lib/dateUtils"
import { Session } from "next-auth"

// For react datepicker to be in spanish
registerLocale("es", es)
setDefaultLocale("es")
const PythonProvider = dynamic<any>(() => import("react-py").then((module) => module.PythonProvider), {
  ssr: false,
})

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  session: Session
}

const App = ({ Component, session, pageProps }: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
  const router = useRouter()
  const [sessionInterval, setSessionInterval] = useState(0)

  // Use Effect to check if the client changed its local computer time or timezone
  useEffect(() => {
    // Each 2 minute check if the client changed its local computer time or timezone
    let previousTime = Date.now()
    const intervalTime = 120000 // 2 minutes
    getAndSetServerOffset()
    const interval = setInterval(() => {
      const currentTime = Date.now()
      // Get the absolute difference between the current time and the previous time
      const timeDifference = Math.abs(currentTime - previousTime)
      // Check if the time difference is greater than interval time * 1.25
      if (timeDifference > intervalTime * 1.25) {
        // Recalculate the offset
        getAndSetServerOffset()
      }
      // Set the previous time to the current time
      previousTime = currentTime
    }, intervalTime)
    // Clear the interval on unmount
    return () => clearInterval(interval)
  }, [])

  return (
    <QueryClientProvider client={ReactQueryClient(router)}>
      <ReactQueryDevtools initialIsOpen={false} />
      <SessionProvider session={session} refetchInterval={sessionInterval}>
        <UserProvider>
          <BreadCrumbProvider>
            <PythonProvider>
              <NavigationProvider>
                <Head>
                  <link rel="icon" href="/logo.svg" type="image/svg" />
                </Head>
                {getLayout(<Component {...pageProps} />)}
              </NavigationProvider>
            </PythonProvider>
          </BreadCrumbProvider>
        </UserProvider>
        <CustomToaster />
        <RefreshTokenHandler setSessionInterval={setSessionInterval} />
      </SessionProvider>
    </QueryClientProvider>
  )
}

export default App
