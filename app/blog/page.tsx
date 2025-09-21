"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function BlogPage() {
  const categories = [
    {
      title: "Academic Notes",
      description: "Course notes and learning materials from my university studies",
      path: "/blog/academic"
    },
    {
      title: "LeetCode Solutions",
      description: "My solutions and explanations for LeetCode problems",
      path: "/blog/leetcode"
    },
    {
      title: "Technical Learning",
      description: "Notes and insights from my self-study and technical explorations",
      path: "/blog/technical"
    }
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blog Categories</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore my learning journey through different categories
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
                {categories.map((category) => (
                  <Link key={category.path} href={category.path}>
                    <Card className="h-full hover:bg-muted/50 transition-colors">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold">{category.title}</h3>
                          <p className="text-muted-foreground">{category.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
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
