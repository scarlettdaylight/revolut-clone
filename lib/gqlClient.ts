import { GraphQLClient } from "graphql-request"

export const getGQLRequestClient = () => {
  const headers: HeadersInit = {
    authorization: ``,
  }
  return new GraphQLClient("https://countries.trevorblades.com/", { headers })
}
