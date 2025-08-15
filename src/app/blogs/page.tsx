"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

type Blog = {
  slug: string;
  title: string;
  description: string;
  image?: string;
};

export default function Page() {
  const [blogs, setBlogs] = useState<Blog[]>([]); // ✅ Typed array

  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((a) => a.json())
      .then((parsed: Blog[]) => {
        setBlogs(parsed);
      })
      .catch(() => {
        setBlogs([
          {
            slug: "hunting-tips-2025",
            title: "Top Hunting Tips for 2025",
            description:
              "Master the wild with our latest hunting strategies, gear reviews, and safety tips for the modern hunter.",
            image:
              "https://images.unsplash.com/photo-1501703979959-797917eb21c8?q=80&w=800&auto=format&fit=crop",
          },
          {
            slug: "wildlife-photography-guide",
            title: "The Ultimate Wildlife Photography Guide",
            description:
              "Learn how to capture breathtaking shots of wildlife with techniques used by professional photographers.",
            image:
              "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=800&auto=format&fit=crop",
          },
          {
            slug: "tracking-animals-in-forest",
            title: "Tracking Animals in Dense Forests",
            description:
              "Discover how to identify tracks, patterns, and signs left by animals in the wild.",
            image:
              "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=800&auto=format&fit=crop",
          },
        ]);
      });
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center py-8 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-green-50 to-green-100">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold italic mb-10 text-green-800 text-center">
        HuntingCoder Blogs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-7xl">
        {blogs.map((blog, index) => {
          const shortSlug = blog.slug?.split("-").pop() || blog.slug;

          return (
            <div
              key={blog.slug || index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col"
            >
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />
              )}
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <Link href={`/blogpost/${shortSlug}`}>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-green-700 hover:underline">
                    {blog.title}
                  </h2>
                </Link>
                <p className="text-gray-600 mt-2 text-sm sm:text-base flex-1">
                  {blog.description}
                </p>
                <Link
                  href={`/blogpost/${shortSlug}`}
                  className="inline-block mt-4 text-green-600 font-semibold hover:text-green-800 text-sm sm:text-base"
                >
                  Read More →
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
