import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Stephen Gao's Blog",
  description: "A personal blog sharing learning notes and projects",
  openGraph: {
    title: "Stephen Gao's Blog",
    description: "LeetCode Solutions | Academic Notes | Technical Learning",
    type: "website",
  },
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
