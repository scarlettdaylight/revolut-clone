import "./globals.css"
import styles from "@/app/page.module.css"
import Image from "next/image"
import Link from "next/link"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav className="container m-auto flex justify-between py-4">
          <Link href={"/"}>
            <div className="flex">
              <Image className={styles.logo} src="/next.svg" alt="Next.js Logo" width={80} height={15} priority />
              <div className={styles.thirteen}>
                <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
              </div>
            </div>
          </Link>
          <div>
            {[["Countries", "/countries"]].map(([title, url]) => (
              <Link
                key={title}
                href={url}
                className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
                {title}
              </Link>
            ))}
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
