import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BlogPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Blog Posts</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A collection of my learning notes and technical articles
                </p>
              </div>
              <div className="w-full max-w-5xl space-y-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">All Posts</h2>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Latest
                    </Button>
                    <Button variant="ghost" size="sm">
                      Most Popular
                    </Button>
                  </div>
                </div>
                <div className="grid gap-8">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-2xl">Understanding React Hooks in Depth</CardTitle>
                          <CardDescription>October 15, 2023</CardDescription>
                        </div>
                        <Badge>React</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p>
                        React Hooks were introduced in React 16.8, allowing you to use state and other React features
                        without writing a class. In this article, I'll dive deep into how React Hooks work and how to
                        use them effectively in your projects. We'll discuss common Hooks like useState, useEffect,
                        useContext, useReducer, and how to create custom Hooks to reuse logic.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="/blog/react-hooks">
                        <Button>Read Full Article</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-2xl">Next.js 13 New Features</CardTitle>
                          <CardDescription>September 28, 2023</CardDescription>
                        </div>
                        <Badge>Next.js</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Next.js 13 brings revolutionary changes such as App Router and Server Components. This article
                        will detail the new features of Next.js 13, including how to use the App Router, the difference
                        between Server Components and Client Components, and new data fetching methods. We will also
                        discuss how to migrate from Pages Router to App Router, and the problems and solutions that may
                        be encountered during the migration process.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="/blog/nextjs-13">
                        <Button>Read Full Article</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-2xl">TypeScript Advanced Types</CardTitle>
                          <CardDescription>August 10, 2023</CardDescription>
                        </div>
                        <Badge>TypeScript</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p>
                        TypeScript provides a powerful type system that can help us write safer and more maintainable
                        code. In this article, I will introduce advanced type operations in TypeScript, including
                        generics, conditional types, mapped types, and index types. With these advanced types, we can
                        build more flexible and precise type definitions and improve the type safety of our code.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="/blog/typescript-advanced">
                        <Button>Read Full Article</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-2xl">CSS Grid Layout Explained</CardTitle>
                          <CardDescription>July 5, 2023</CardDescription>
                        </div>
                        <Badge>CSS</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p>
                        CSS Grid is a powerful two-dimensional layout system that can help us create complex web
                        layouts. In this article, I will detail the basic concepts and usage of CSS Grid, including grid
                        containers, grid items, grid lines, and grid areas. We will also demonstrate how to use CSS Grid
                        to create various common layouts, and how to combine it with Flexbox.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="/blog/css-grid">
                        <Button>Read Full Article</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
                <div className="flex justify-center">
                  <Button variant="outline">Load More</Button>
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
