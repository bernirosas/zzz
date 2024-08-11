/**
 * User session object.
 * Used to annotate that the user information will
 * always include this properties in Google Auth.
 * */

import { User } from "~/graphql/generated/graphql"

export type UserSession = {
  image: string
  accessToken?: string
} & User
