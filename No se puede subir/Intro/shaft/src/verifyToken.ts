import jwt from "jsonwebtoken"
import jwksRsa from "jwks-rsa"

const kid = process.env.AUTH0_KID

/**
 * Verify and decode the access token in the request header
 * @param token Auth0 access token
 * @returns The decoded token if it is valid or an error if the token is invalid
 */
const verifyToken = async (token: string): Promise<any> => {
  const client = jwksRsa({
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  })

  const key = await client.getSigningKey(kid)
  if (!key) {
    throw new Error("Invalid KID. Cant get key")
  }
  const signingKey = key.getPublicKey()
  if (!signingKey) {
    throw new Error("Invalid KID. Cant get public key")
  }

  const unbearedToken = token.replace("Bearer ", "")
  console.info("Verifying token", unbearedToken)
  return new Promise((resolve, reject) => {
    jwt.verify(
      unbearedToken,
      signingKey,
      { audience: process.env.AUTH0_AUDIENCE, issuer: `https://${process.env.AUTH0_DOMAIN}/`, algorithms: ["RS256"] },
      (err, decoded) => {
        console.error(err)
        if (err) reject(err)
        resolve(decoded)
      }
    )
  })
}

export default verifyToken
