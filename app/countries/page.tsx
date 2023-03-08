import { graphql } from "@/gql/gql"
import { CountriesDocument } from "@/gql/graphql"

import { getGQLRequestClient } from "@/lib/gqlClient"
import Image from "next/image"
import { Inter } from "@next/font/google"
import styles from "./page.module.css"

const inter = Inter({ subsets: ["latin"] })

const getAllCountriesQueryDocument = graphql(/* GraphQL */ `
  query Countries {
    countries {
      name
      code
      capital
    }
  }
`)

async function getCountriesList() {
  const client = getGQLRequestClient()
  const result = await client.request(CountriesDocument)

  return result.countries
}

export default async function Home() {
  const countries = await getCountriesList()

  return (
    <main className="container m-auto">
      <div className="grid grid-cols-3">
        {countries.map((country) => (
          <div key={country.code}>{country.name}</div>
        ))}
      </div>
    </main>
  )
}
