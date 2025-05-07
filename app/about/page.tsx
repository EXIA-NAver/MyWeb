import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
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
              <Link href="/blog" className="flex items-center text-sm font-medium text-muted-foreground">
                Blog
              </Link>
              <Link href="/about" className="flex items-center text-sm font-medium text-foreground">
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hello, I'm a passionate developer focused on frontend and full-stack development.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  I have several years of software development experience, particularly in web development. I love
                  learning new technologies and applying them to real-world projects. I believe in the power of
                  technology to change the world, so I'm constantly working to improve my skills to create better
                  products.
                </p>
                <p>
                  On this blog, I share my learning notes, technical insights, and project experiences. I hope these
                  resources are helpful to you, and I welcome discussions on technology-related topics.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="https://github.com/EXIA-NAver" target="_blank" rel="noreferrer">
                  <Button>GitHub Profile</Button>
                </Link>
                <Link href="mailto:opzhi6@gmail.com">
                  <Button variant="outline">Contact Me</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Technologies and tools I'm proficient in
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Frontend Development</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge>HTML</Badge>
                        <Badge>CSS</Badge>
                        <Badge>JavaScript</Badge>
                        <Badge>TypeScript</Badge>
                        <Badge>React</Badge>
                        <Badge>Next.js</Badge>
                        <Badge>Vue</Badge>
                        <Badge>Tailwind CSS</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Backend Development</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge>Node.js</Badge>
                        <Badge>Express</Badge>
                        <Badge>NestJS</Badge>
                        <Badge>Python</Badge>
                        <Badge>Django</Badge>
                        <Badge>RESTful API</Badge>
                        <Badge>GraphQL</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Databases</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge>MySQL</Badge>
                        <Badge>PostgreSQL</Badge>
                        <Badge>MongoDB</Badge>
                        <Badge>Redis</Badge>
                        <Badge>Prisma</Badge>
                        <Badge>Sequelize</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">DevOps</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge>Git</Badge>
                        <Badge>GitHub Actions</Badge>
                        <Badge>Docker</Badge>
                        <Badge>CI/CD</Badge>
                        <Badge>AWS</Badge>
                        <Badge>Vercel</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Testing</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge>Jest</Badge>
                        <Badge>React Testing Library</Badge>
                        <Badge>Cypress</Badge>
                        <Badge>Playwright</Badge>
                        <Badge>单元测试</Badge>
                        <Badge>集成测试</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Other</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge>UI/UX设计</Badge>
                        <Badge>Figma</Badge>
                        <Badge>响应式设计</Badge>
                        <Badge>SEO</Badge>
                        <Badge>性能优化</Badge>
                        <Badge>无障碍设计</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My academic background
                </p>
              </div>
              <div className="w-full max-w-3xl space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold">Computer Science and Technology</h3>
                        <p className="text-muted-foreground">Well-known University</p>
                      </div>
                      <div className="text-right">
                        <p>2018 - 2022</p>
                        <Badge variant="outline">Bachelor's Degree</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold">Web Development Specialization</h3>
                        <p className="text-muted-foreground">Online Education Platform</p>
                      </div>
                      <div className="text-right">
                        <p>2022</p>
                        <Badge variant="outline">Certificate</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  If you have any questions or collaboration opportunities, feel free to reach out
                </p>
              </div>
              <div className="w-full max-w-md space-y-4">
                <div className="flex items-center justify-center space-x-4">
                  <Link href="mailto:opzhi6@gmail.com" className="flex items-center space-x-2">
                    <Button variant="outline">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 mr-2"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      opzhi6@gmail.com
                    </Button>
                  </Link>
                  <Link href="https://github.com/EXIA-NAver" target="_blank" rel="noreferrer" className="flex items-center space-x-2">
                    <Button variant="outline">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 mr-2"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      GitHub
                    </Button>
                  </Link>
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
