import { CodegenConfig } from "@graphql-codegen/cli"
import { loadEnvConfig } from "@next/env"
loadEnvConfig(process.cwd())

const config: CodegenConfig = {
  schema: {
    ["https://countries.trevorblades.com/"]: {
      headers: {
        authorization: "",
      },
    },
  },
  documents: ["./**/*.tsx"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./gql/": {
      preset: "client",
      plugins: [],
    },
  },
}

export default config
