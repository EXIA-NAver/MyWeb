"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function GithubProjects() {
  const projects = [
    {
      title: "Personal Blog",
      description: "A modern personal blog built with Next.js, showcasing my learning journey and technical explorations",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/EXIA-NAver/MyWeb"
    },
    {
      title: "English Learning App",
      description: "An interactive application designed to enhance English language learning through various exercises and activities",
      technologies: ["Python", "Kotlin", "Android Studio", "Firebase", "MongoDB"],
      link: "https://github.com/EXIA-NAver/EnglishLearningApp"
    },
    {
      title: "Recommender System",
      description: "A sophisticated recommendation system that provides personalized content suggestions based on user preferences",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Pandas"],
      link: "https://github.com/EXIA-NAver/Exia.s-Recommender-System"
    },
    {
      title: "AI Animal Distribution System",
      description: "An AI-powered system for analyzing and predicting animal distribution patterns using machine learning",
      technologies: ["Python", "AI", "Machine Learning", "Data Science"],
      link: "https://drive.google.com/drive/folders/1pH6btDNPU_7LSiZiC_RWCOyOtb6LiPIY"
    }
  ]

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 w-full max-w-5xl">
      {projects.map((project) => (
        <Link key={project.title} href={project.link} target="_blank" rel="noreferrer">
          <Card className="h-full hover:bg-muted/50 transition-colors">
            <CardContent className="p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
