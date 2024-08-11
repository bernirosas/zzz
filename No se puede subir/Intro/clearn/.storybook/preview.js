import { RouterContext } from "next/dist/shared/lib/router-context";
import "~/styles/globals.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  /* Allow the use of useRouter inside components */
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}
