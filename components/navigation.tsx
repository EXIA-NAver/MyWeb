"use client"

import Link from "next/link"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const pathname = usePathname()
  
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold">Stephen Gao's Blog</span>
          </Link>
          <nav className="flex gap-6">
            <Link 
              href="/" 
              className={`flex items-center text-sm font-medium ${
                pathname === "/" ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link 
              href="/blog" 
              className={`flex items-center text-sm font-medium ${
                pathname.startsWith("/blog") ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              className={`flex items-center text-sm font-medium ${
                pathname === "/about" ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              About
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Link href="https://github.com/EXIA-NAver" target="_blank" rel="noreferrer">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GitHubLogoIcon className="h-5 w-5" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}
