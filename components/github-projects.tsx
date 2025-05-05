"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

// 模拟GitHub项目数据
const mockProjects = [
  {
    id: 1,
    name: "Personal Blog",
    description: "Personal blog website built with Next.js and Tailwind CSS",
    html_url: "https://github.com/yourusername/personal-blog",
    homepage: "https://your-blog.com",
    stargazers_count: 25,
    forks_count: 8,
    language: "TypeScript",
    topics: ["next-js", "tailwindcss", "blog"],
  },
  {
    id: 2,
    name: "E-commerce Platform",
    description: "Full-stack e-commerce platform based on React and Node.js",
    html_url: "https://github.com/yourusername/ecommerce-platform",
    homepage: "https://your-ecommerce.com",
    stargazers_count: 42,
    forks_count: 15,
    language: "JavaScript",
    topics: ["react", "node-js", "ecommerce", "mongodb"],
  },
  {
    id: 3,
    name: "Task Manager",
    description: "Task management application built with Vue.js and Firebase",
    html_url: "https://github.com/yourusername/task-manager",
    homepage: "https://your-task-app.com",
    stargazers_count: 18,
    forks_count: 5,
    language: "Vue",
    topics: ["vue-js", "firebase", "task-management"],
  },
  {
    id: 4,
    name: "Weather App",
    description: "Cross-platform weather forecast app developed with React Native",
    html_url: "https://github.com/yourusername/weather-app",
    homepage: "",
    stargazers_count: 12,
    forks_count: 3,
    language: "JavaScript",
    topics: ["react-native", "weather-api", "mobile-app"],
  },
]

export function GithubProjects() {
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 在实际应用中，这里应该调用GitHub API获取真实数据
    // 例如: fetch('https://api.github.com/users/yourusername/repos')
    // 这里使用模拟数据
    const fetchProjects = async () => {
      try {
        // 模拟API请求延迟
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setProjects(mockProjects)
      } catch (error) {
        console.error("Failed to fetch GitHub projects:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 w-full max-w-5xl">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-20 w-full" />
            </CardContent>
            <CardFooter>
              <Skeleton className="h-10 w-full" />
            </CardFooter>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 w-full max-w-5xl">
      {projects.map((project) => (
        <Card key={project.id}>
          <CardHeader>
            <CardTitle>{project.name}</CardTitle>
            <CardDescription>
              <div className="flex items-center gap-2">
                <span>⭐ {project.stargazers_count}</span>
                <span>🍴 {project.forks_count}</span>
                {project.language && <Badge variant="outline">{project.language}</Badge>}
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>{project.description}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {project.topics.map((topic: string) => (
                <Badge key={topic} variant="secondary" className="text-xs">
                  {topic}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href={project.html_url} target="_blank" rel="noreferrer">
              <Button variant="outline" size="sm">
                View Code
              </Button>
            </Link>
            {project.homepage && (
              <Link href={project.homepage} target="_blank" rel="noreferrer">
                <Button size="sm">Visit Website</Button>
              </Link>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
