import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search Algorithms - Academic Notes',
  description: 'An in-depth exploration of various search algorithms including linear search, binary search, interpolation search, and jump search.',
};

export default function SearchAlgorithms() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl">
            <article className="prose prose-lg max-w-none">
                <h1 className="text-4xl font-bold mb-8 text-center">Search Algorithms</h1>
                
                <p className="text-justify">
                  Search is defined as finding the position of an element within a data structure. For example, 
                  searching for element 9 in the sequence (21, 31, 11, 9, 1, 0, 22) would successfully locate 9 at index 3. 
                  Here are several search algorithms:
                </p>

                <h2 className="text-3xl font-bold mb-6 text-center mt-12">Linear Search</h2>
                <p className="text-justify">
                  Linear search is an algorithm used for unordered data structures. It compares each element in the data structure 
                  sequentially until the target element is found. Using our previous example, we start searching from 21, which doesn't match, 
                  then check 31, which also doesn't match, then 11, and finally find 9.
                </p>
                <p className="text-justify">
                  The time complexity of linear search is O(n), where n is the number of elements in the array. The best case occurs when 
                  the target element is the first element in the array, while the worst case happens when the target element doesn't exist 
                  in the array or is the last element.
                </p>

                <h2 className="text-3xl font-bold mb-6 text-center mt-12">Binary Search</h2>
                <p className="text-justify">
                  Binary search is particularly useful for ordered lists. The algorithm starts from the middle of the array and, if the element 
                  hasn't been found, reduces the search space by half. Here's the pseudocode:
                </p>
                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                  <p>BEG = lower_bound and END = upper_bound</p>
                  <p>MID = (BEG + END) / 2</p>
                  <p>If VAL &lt; A[MID], then VAL will appear in the left segment of the array; END will be changed to: END = MID - 1</p>
                  <p>If VAL &gt; A[MID], then VAL will appear in the right segment of the array; BEG will be changed to: BEG = MID + 1</p>
                </div>
                <p className="text-justify">
                  For example, searching for element 9 in (0, 1, 9, 11, 21, 22, 34):
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-center">BEG = 0, END = 6</p>
                  <p className="text-center">Middle value is 3, check index 3: 11 &gt; 9. Set END = MID - 1 = 3 - 1 = 2</p>
                  <p className="text-center">Middle value is 1, check index 1: 1 &lt; 9. Set BEG = MID + 1 = 2</p>
                  <p className="text-center">Middle value is 2, found 9.</p>
                </div>
                <p className="text-justify">
                  The time complexity of binary search is O(log₂n).
                </p>

                <h2 className="text-3xl font-bold mb-6 text-center mt-12">Interpolation Search</h2>
                <p className="text-justify">
                  Interpolation search is an algorithm for uniformly distributed ordered lists. Consider an array [0, 10, 20, 30, 40, 50, 60, 70, 80, 90], 
                  where each adjacent element differs by 10, satisfying uniform distribution. To find element 70, we first calculate the expected proportion 
                  of elements less than or equal to 70: p = (70 - 0) / (90 - 0) = 7/9. With array length n = 10, the expected index is n × p = 7, 
                  corresponding to element 70, which is exactly what we're looking for. This improves efficiency significantly compared to binary search.
                </p>
                <p className="text-justify">
                  The interpolation search algorithm follows the same approach as binary search, with one key difference: the element compared with the target 
                  is not the middle element of the search region, but rather calculated using this formula:
                </p>
                <div className="text-center mb-6">
                  <p className="italic">Mid = Begin + ((End - Begin) / (A[End] - A[Begin])) * (X - A[Begin])</p>
                </div>
                <p className="text-justify">Where:</p>
                <div className="space-y-2 mb-6">
                  <p className="text-center">Mid: Calculated element position</p>
                  <p className="text-center">End: Position of the last element in the search region</p>
                  <p className="text-center">Begin: Position of the first element in the search region</p>
                  <p className="text-center">X: Target element to find</p>
                  <p className="text-center">A[]: The entire sequence to be searched</p>
                </div>

                <h2 className="text-3xl font-bold mb-6 text-center mt-12">Jump Search</h2>
                <p className="text-justify">
                  Jump Search is similar to binary search, designed for ordered sequences, but it finds the target by examining fewer elements. 
                  It uses a fixed jump interval, making it more efficient than binary search in many cases.
                </p>
                <p className="text-justify">
                  For example, given an array arr of size n and jump interval m, we search indices arr[0], arr[m], arr[2m]...arr[km], etc.
                </p>
                <p className="text-justify">
                  Consider the array: (0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610). The array length is 16. 
                  Jump search will find 55 in the following steps, assuming a block size of 4:
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-center">Step 1: Jump from index 0 to index 4</p>
                  <p className="text-center">Step 2: Jump from index 4 to index 8</p>
                  <p className="text-center">Step 3: Jump from index 8 to index 16</p>
                  <p className="text-center">Step 4: Since element at index 16 is greater than 55, we step back to index 9</p>
                  <p className="text-center">Step 5: Perform linear search from index 9 to find element 55</p>
                </div>
                <p className="text-justify">
                  The optimal block size to skip is O(√n). This gives jump search a time complexity of O(√n). 
                  The time complexity of jump search falls between linear search (O(n)) and binary search (O(log n)).
                </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
} 