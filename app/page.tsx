import Image from "next/image"
import { Inter } from "@next/font/google"
import styles from "./page.module.css"

const inter = Inter({ subsets: ["latin"] })

async function getGameList(platform = "pc") {
  const res = await fetch(`https://www.freetogame.com/api/games?platform=${platform}`)

  if (!res.ok) {
    throw Error("Failed to fetch game list")
  }

  return res.json()
}

export default async function Home() {
  const data = await getGameList()

  return (
    <main className={styles.main}>
      <div className="grid w-100 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {new Array(12).fill("").map((_, i) => (
          <a
            key={data?.[i]?.title}
            href={data?.[i]?.game_url}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer">
            <Image className="pb-4" src={data?.[i]?.thumbnail} alt={data?.[i]?.title} width={380} height={380}></Image>
            <h2 className="text-lg strong">{data?.[i]?.title}</h2>
            <p className={"text-sm text-gray-100"}>{data?.[i]?.short_description}</p>
          </a>
        ))}
      </div>
    </main>
  )
}
