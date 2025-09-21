import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '28. Find the Index of the First Occurrence in a String - LeetCode Solutions',
  description: 'Solution and explanation for LeetCode problem 28: Find the Index of the First Occurrence in a String, including both brute force and KMP algorithm approaches.',
};

export default function FindFirstOccurrence() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl">
            <article className="prose prose-lg max-w-none">
                <h1 className="text-4xl font-bold mb-8 text-center">28. Find the Index of the First Occurrence in a String</h1>
                
                <h2 className="text-3xl font-bold mb-6 text-center mt-12">Problem Description</h2>
                <p className="text-justify">
                  Find the first occurrence of a string within another string and return its starting index.
                </p>

                <h3 className="text-2xl font-bold mb-4 mt-8">Example 1:</h3>
                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                  <p><strong>Input:</strong> haystack = "sadbutsad", needle = "sad"</p>
                  <p><strong>Output:</strong> 0</p>
                  <p><strong>Explanation:</strong> "sad" occurs at index 0 and 6. The first occurrence is at index 0, so we return 0.</p>
                </div>

                <h3 className="text-2xl font-bold mb-4 mt-8">Example 2:</h3>
                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                  <p><strong>Input:</strong> haystack = "leetcode", needle = "leeto"</p>
                  <p><strong>Output:</strong> -1</p>
                  <p><strong>Explanation:</strong> "leeto" did not occur in "leetcode", so we return -1.</p>
                </div>

                <h2 className="text-3xl font-bold mb-6 text-center mt-12">Solution Approach</h2>
                <p className="text-justify">
                  First, we check if the needle exists in the haystack. If not, we return -1 immediately.
                </p>
                <p className="text-justify">
                  We enumerate each character in the haystack as a potential starting point, and attempt to match from that position:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>If match is successful: Return the starting index</li>
                  <li>If match fails: Try the next starting point in haystack</li>
                </ul>

                <h3 className="text-2xl font-bold mb-4 mt-8">Brute Force Solution</h3>
                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                  <pre className="text-sm">
{`class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if not needle:
            return 0  # Return 0 if needle is empty string

        n, m = len(haystack), len(needle)

        # Try matching from each possible starting point in haystack
        for i in range(n - m + 1):
            match = True
            for j in range(m):
                if haystack[i + j] != needle[j]:  # Characters don't match
                    match = False
                    break
            if match:
                return i  # Successful match, return starting index

        return -1  # No match found`}
                  </pre>
                </div>

                <h3 className="text-2xl font-bold mb-4 mt-8">KMP Algorithm Solution</h3>
                <p className="text-justify">
                  The KMP algorithm is a fast string matching algorithm that solves this exact problem: how to quickly find a matching string within an original string.
                </p>
                <p className="text-justify">
                  While the brute force solution has a time complexity of O(m*n), the KMP algorithm achieves O(m+n) complexity. This improvement is possible because KMP can extract and reuse effective information during "incomplete matches" to reduce redundant comparisons.
                </p>
                <p className="text-justify">
                  When a match fails, instead of starting over from the beginning, KMP uses the matching information to move the pattern string to a reasonable position, avoiding unnecessary comparisons.
                </p>
                <p className="text-justify">
                  For a more detailed explanation of the KMP algorithm implementation, please refer to my article on <Link href="/blog/technical/kmp-algorithm" className="text-blue-600 hover:underline">KMP Algorithm Introduction</Link>.
                </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
} 