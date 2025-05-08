"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function LeetCodePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold">Personal Blog</span>
            </Link>
            <nav className="flex gap-6">
              <Link href="/" className="flex items-center text-sm font-medium text-muted-foreground">
                Home
              </Link>
              <Link href="/blog" className="flex items-center text-sm font-medium text-foreground">
                Blog
              </Link>
              <Link href="/about" className="flex items-center text-sm font-medium text-muted-foreground">
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">LeetCode Solutions</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My solutions and explanations for LeetCode problems
                </p>
              </div>
              <div className="w-full max-w-5xl space-y-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">All Solutions</h2>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Latest
                    </Button>
                    <Button variant="ghost" size="sm">
                      Difficulty
                    </Button>
                  </div>
                </div>
                <div className="grid gap-8">
                  {/* Solutions will be added here */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm leading-loose text-muted-foreground">
            © 2023 Personal Blog. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground underline underline-offset-4">
              Contact Me
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
} 