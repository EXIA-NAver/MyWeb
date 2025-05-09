"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function KMPAlgorithmPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">KMP Algorithm Introduction</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A comprehensive guide to understanding the Knuth-Morris-Pratt string matching algorithm
                </p>
              </div>
              <div className="w-full max-w-5xl space-y-8">
                <article className="prose prose-gray max-w-none dark:prose-invert">
                  <h2 className="text-3xl font-bold mb-6 text-center">Introduction</h2>
                  <p className="text-justify">
                    The Knuth-Morris-Pratt (KMP) algorithm is a classic string matching algorithm used to find occurrences of a pattern within a text string.
                    The naive approach to string matching involves comparing each character one by one, which has a worst-case time complexity of O(n*m),
                    where n is the length of the main string and m is the length of the pattern.
                  </p>

                  <h2 className="text-3xl font-bold mb-6 text-center mt-12">Core Idea</h2>
                  <p className="text-justify">
                    The main idea of KMP is to avoid unnecessary comparisons by utilizing information from previous matches.
                    When we encounter a mismatch, instead of starting over from the next character in the main string,
                    we can use a precomputed "next" array to skip some characters and continue matching from an optimal position.
                  </p>

                  <h2 className="text-3xl font-bold mb-6 text-center mt-12">Understanding the Next Array</h2>
                  <p className="text-justify">
                    Let's understand the concept with an example. Suppose we have:
                  </p>
                  <div className="text-center space-y-2 mb-6">
                    <p className="italic">Main string: "abababca"</p>
                    <p className="italic">Substring: "ababca"</p>
                    <p className="italic">Next array: [0, 0, 1, 2, 0, 1]</p>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 mt-8">Step-by-Step Matching Process</h3>
                  <ol className="list-decimal pl-8 space-y-2 text-justify">
                    <li>Compare main[0] 'a' with substring[0] 'a' → match, advance both pointers</li>
                    <li>Compare main[1] 'b' with substring[1] 'b' → match, advance both pointers</li>
                    <li>Compare main[2] 'a' with substring[2] 'a' → match, advance both pointers</li>
                    <li>Compare main[3] 'b' with substring[3] 'b' → match, advance both pointers</li>
                    <li>Compare main[4] 'a' with substring[4] 'c' → mismatch</li>
                    <li>Use next[3] = 2 to jump back to substring[2] and continue matching</li>
                    <li>Continue matching until substring is fully matched</li>
                  </ol>

                  <h2 className="text-3xl font-bold mb-6 text-center mt-12">Building the Next Array</h2>
                  <p className="text-justify">
                    The next array is constructed by analyzing the substring's prefixes and suffixes:
                  </p>
                  <div className="space-y-2 mb-6">
                    <p className="text-center"><strong>Prefix:</strong> All substrings starting from the first character (excluding the entire string)</p>
                    <p className="text-center"><strong>Suffix:</strong> All substrings ending at the last character (excluding the entire string)</p>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 mt-8">Example: Substring "ababca"</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold mb-2">1. Position 0 ("a"):</h4>
                      <p className="text-center">Prefixes: ∅</p>
                      <p className="text-center">Suffixes: ∅</p>
                      <p className="text-center">Next[0] = 0</p>
                    </div>

                    <div>
                      <h4 className="font-bold mb-2">2. Position 1 ("ab"):</h4>
                      <p className="text-center">Prefixes: ["a"]</p>
                      <p className="text-center">Suffixes: ["b"]</p>
                      <p className="text-center">Next[1] = 0</p>
                    </div>

                    <div>
                      <h4 className="font-bold mb-2">3. Position 2 ("aba"):</h4>
                      <p className="text-center">Prefixes: ["a", "ab"]</p>
                      <p className="text-center">Suffixes: ["ba", "a"]</p>
                      <p className="text-center">Common: "a"</p>
                      <p className="text-center">Next[2] = 1</p>
                    </div>

                    <div>
                      <h4 className="font-bold mb-2">4. Position 3 ("abab"):</h4>
                      <p className="text-center">Prefixes: ["a", "ab", "aba"]</p>
                      <p className="text-center">Suffixes: ["bab", "ab", "b"]</p>
                      <p className="text-center">Common: "ab"</p>
                      <p className="text-center">Next[3] = 2</p>
                    </div>

                    <div>
                      <h4 className="font-bold mb-2">5. Position 4 ("ababc"):</h4>
                      <p className="text-center">Prefixes: ["a", "ab", "aba", "abab"]</p>
                      <p className="text-center">Suffixes: ["babc", "abc", "bc", "c"]</p>
                      <p className="text-center">No common elements</p>
                      <p className="text-center">Next[4] = 0</p>
                    </div>

                    <div>
                      <h4 className="font-bold mb-2">6. Position 5 ("ababca"):</h4>
                      <p className="text-center">Prefixes: ["a", "ab", "aba", "abab", "ababc"]</p>
                      <p className="text-center">Suffixes: ["babca", "abca", "bca", "ca", "a"]</p>
                      <p className="text-center">Common: "a"</p>
                      <p className="text-center">Next[5] = 1</p>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold mb-6 text-center mt-12">Implementation</h2>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold mb-4">Building the Next Array</h3>
                    <pre className="bg-gray-100 p-4 rounded-lg text-left">
                      {`def build_kmp_table(substring):
    n = len(substring)
    next = [0] * n  # Initialize the table with all zeros
    j = 0  # Length of the previous longest prefix-suffix
    
    for i in range(1, n):
        # If mismatch, backtrack to the previous prefix
        while j > 0 and substring[i] != substring[j]:
            j = next[j - 1]
        
        # If match, extend the current prefix
        if substring[i] == substring[j]:
            j += 1
        
        next[i] = j  # Update the table
    
    return next`}
                    </pre>

                    <h3 className="text-2xl font-bold mb-4 mt-8">KMP Search Implementation</h3>
                    <pre className="bg-gray-100 p-4 rounded-lg text-left">
                      {`def kmp_search(text, substring):
    if not substring:
        return 0  # Empty substring is always found at index 0
    
    next = build_kmp_table(substring)
    j = 0  # Pointer for substring
    
    for i in range(len(text)):  # Pointer for text
        # If mismatch, follow the 'next' table to shift substring
        while j > 0 and text[i] != substring[j]:
            j = next[j - 1]
        
        # If match, move both pointers forward
        if text[i] == substring[j]:
            j += 1
        
        # If we matched the entire substring
        if j == len(substring):
            return i - j + 1  # Match found at this index
    
    return -1  # No match found`}
                    </pre>
                  </div>

                  <h2 className="text-3xl font-bold mb-6 text-center mt-12">Time Complexity</h2>
                  <p className="text-justify">
                    The KMP algorithm has a time complexity of O(n + m), where:
                  </p>
                  <div className="text-center space-y-2 mb-6">
                    <p className="italic">n is the length of the main string</p>
                    <p className="italic">m is the length of the substring</p>
                  </div>
                  <p className="text-justify">
                    This is a significant improvement over the naive approach's O(n*m) complexity.
                  </p>

                  <h2 className="text-3xl font-bold mb-6 text-center mt-12">Conclusion</h2>
                  <p className="text-justify">
                    The KMP algorithm is a powerful tool for string matching that provides efficient solutions to pattern matching problems.
                    By utilizing the next array to avoid unnecessary comparisons, it achieves linear time complexity,
                    making it much more efficient than the naive approach for large texts and patterns.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm leading-loose text-muted-foreground">
            © 2024 Personal Blog. All rights reserved.
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