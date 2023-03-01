import "./globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav className="flex sm:justify-center space-x-4 w-auto">
          {[
            ["Work", "/work"],
            ["Games", "/games"],
          ].map(([title, url]) => (
            <a
              key={title}
              href={url}
              className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
              {title}
            </a>
          ))}
        </nav>
        {children}
      </body>
    </html>
  )
}
