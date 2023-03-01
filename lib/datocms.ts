import { TypedDocumentNode } from "@graphql-typed-document-node/core"
import { GraphQLClient } from "graphql-request"

export const getDatoRequestClient = (
  { includeDrafts = false, excludeInvalid = false } = {
    includeDrafts: false,
    excludeInvalid: false,
  },
) => {
  const headers: HeadersInit = {
    authorization: `Bearer ${process.env.DATOCMS_API_KEY}`,
  }
  if (includeDrafts) {
    headers["X-Include-Drafts"] = "true"
  }
  if (excludeInvalid) {
    headers["X-Exclude-Invalid"] = "true"
  }
  return new GraphQLClient("https://graphql.datocms.com", { headers })
}
