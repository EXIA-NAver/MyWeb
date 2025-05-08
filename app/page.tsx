import Link from "next/link"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { GithubProjects } from "@/components/github-projects"
import RotatingCube from "@/components/RotatingCube"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold">Personal Blog</span>
            </Link>
            <nav className="flex gap-6">
              <Link href="/" className="flex items-center text-sm font-medium text-foreground">
                Home
              </Link>
              <Link href="/blog" className="flex items-center text-sm font-medium text-muted-foreground">
                Blog
              </Link>
              <Link href="/about" className="flex items-center text-sm font-medium text-muted-foreground">
                About
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Link href="https://github.com/yourusername" target="_blank" rel="noreferrer">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <GitHubLogoIcon className="h-5 w-5" />
              </div>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Hello, I'm a <span className="text-primary">Developer</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I'm a passionate developer focused on frontend and full-stack development. This blog is where I
                    share my learning notes and showcase my projects.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/blog">
                    <Button>View My Blog</Button>
                  </Link>
                  <Link href="/about">
                    <Button variant="outline">Learn More About Me</Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center h-[400px]">
                <RotatingCube />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest Blog Posts</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out my recent learning notes and technical articles
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
                <Card>
                  <CardHeader>
                    <CardTitle>Understanding React Hooks in Depth</CardTitle>
                    <CardDescription>October 15, 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Exploring how React Hooks work and how to use them effectively in your projects...</p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/blog/react-hooks">
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>New Features in Next.js 13</CardTitle>
                    <CardDescription>September 28, 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Next.js 13 brings revolutionary changes like App Router, Server Components...</p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/blog/nextjs-13">
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Advanced TypeScript Types</CardTitle>
                    <CardDescription>August 10, 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Learn advanced type operations in TypeScript to improve your code's type safety...</p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/blog/typescript-advanced">
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
              <Link href="/blog">
                <Button variant="outline">View All Posts</Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">GitHub Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are some of my open-source projects on GitHub
                </p>
              </div>
              <GithubProjects />
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
