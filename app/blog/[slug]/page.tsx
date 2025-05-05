"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // 这里可以根据slug获取博客文章的内容
  // 这里使用静态内容作为示例
  const post = {
    title: "React Hooks 深入理解",
    date: "2023年10月15日",
    category: "React",
    content: `
      React Hooks是React 16.8引入的新特性，它允许你在不编写class的情况下使用state以及其他的React特性。
      
      ## 为什么使用Hooks？
      
      在React Hooks出现之前，我们需要使用class组件来管理状态和生命周期。这导致了一些问题：
      
      1. 组件之间难以复用状态逻辑
      2. 复杂组件变得难以理解
      3. 类组件中的this指向问题常常让人困惑
      
      Hooks解决了这些问题，它让我们可以在函数组件中使用React的特性。
      
      ## 常用的Hooks
      
      ### useState
      
      \`\`\`jsx
      import React, { useState } from 'react';
      
      function Counter() {
        const [count, setCount] = useState(0);
        
        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
              Click me
            </button>
          </div>
        );
      }
      \`\`\`
      
      ### useEffect
      
      \`\`\`jsx
      import React, { useState, useEffect } from 'react';
      
      function Example() {
        const [count, setCount] = useState(0);
        
        useEffect(() => {
          document.title = \`You clicked \${count} times\`;
        });
        
        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
              Click me
            </button>
          </div>
        );
      }
      \`\`\`
      
      ### useContext
      
      \`\`\`jsx
      import React, { useContext } from 'react';
      
      const ThemeContext = React.createContext('light');
      
      function ThemedButton() {
        const theme = useContext(ThemeContext);
        return <button className={theme}>I am styled by theme context!</button>;
      }
      \`\`\`
      
      ## 自定义Hooks
      
      自定义Hooks是一种复用状态逻辑的方式，它不复用state本身，而是复用状态逻辑。
      
      \`\`\`jsx
      import { useState, useEffect } from 'react';
      
      function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
          width: undefined,
          height: undefined,
        });
        
        useEffect(() => {
          function handleResize() {
            setWindowSize({
              width: window.innerWidth,
              height: window.innerHeight,
            });
          }
          
          window.addEventListener('resize', handleResize);
          handleResize();
          
          return () => window.removeEventListener('resize', handleResize);
        }, []);
        
        return windowSize;
      }
      \`\`\`
      
      ## 结论
      
      React Hooks是一个强大的特性，它使我们能够在函数组件中使用React的各种特性，使代码更加简洁、易于理解和测试。
      通过合理使用Hooks，我们可以编写出更加优雅、可维护的React应用。
    `,
    relatedPosts: [
      { title: "Next.js 13 新特性", slug: "nextjs-13" },
      { title: "TypeScript 高级类型", slug: "typescript-advanced" },
      { title: "CSS Grid 布局详解", slug: "css-grid" },
    ],
  }

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
        <article className="container max-w-3xl py-12 md:py-24 lg:py-32">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Link href="/blog">
                <Button variant="ghost" size="sm">
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
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  Back to Blog List
                </Button>
              </Link>
              <Badge>{post.category}</Badge>
            </div>
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <p className="text-muted-foreground">{post.date}</p>
          </div>
          <div className="mt-8">
            <Image
              src="/placeholder.svg?key=sjiel"
              alt="博客封面图"
              width={800}
              height={400}
              className="rounded-lg object-cover"
              priority
            />
          </div>
          <div className="prose prose-gray dark:prose-invert max-w-none mt-8">
            {post.content.split("\n").map((line, index) => {
              if (line.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                    {line.replace("## ", "")}
                  </h2>
                )
              } else if (line.startsWith("### ")) {
                return (
                  <h3 key={index} className="text-xl font-bold mt-6 mb-3">
                    {line.replace("### ", "")}
                  </h3>
                )
              } else if (line.startsWith("```")) {
                return null // 简化处理，实际应用中可以使用代码高亮组件
              } else if (line.endsWith("```")) {
                return null // 简化处理，实际应用中可以使用代码高亮组件
              } else if (line.trim() === "") {
                return <br key={index} />
              } else {
                return (
                  <p key={index} className="my-4">
                    {line}
                  </p>
                )
              }
            })}
          </div>
          <div className="mt-12 border-t pt-8">
            <h3 className="text-2xl font-bold mb-4">Related Posts</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {post.relatedPosts.map((relatedPost, index) => (
                <Link key={index} href={`/blog/${relatedPost.slug}`}>
                  <div className="border rounded-lg p-4 hover:bg-muted transition-colors">
                    <h4 className="font-medium">{relatedPost.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </article>
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
