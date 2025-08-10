"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Page() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    console.log("useEffect is running.");
    fetch("http://localhost:3000/api/blogs")
      .then((a) => a.json())
      .then((parsed) => {
        console.log(parsed);
        setBlogs(parsed);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex w-screen h-screen fixed overflow-hidden flex-col items-center justify-center min-h-screen text-center">
      <style jsx>{`
        .blogs {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 20px;
        }
        .blogItem {
          padding: 16px;
          border-radius: 8px;
          background-color: #e1e6abff;
          box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
        }
      `}</style>

      <h1 className="text-4xl sm:text-3xl italic font-serif font-bold">
        This is blog page
      </h1>

      <div className="blogs">
        {blogs.map((blog, index) => (
          <div key={blog.slug || index} className="blogItem">
            <Link href={`/blogpost/${blog.slug}`}>
              <h1 className="text-2xl sm:text-lg font-bold font-mono tracking-tight text-center sm:text-left">
                {blog.title}
              </h1>
            </Link>
            <p>{blog.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        Click it:{" "}
        <Link
          className="text-blue-400 align-right justify-end text-right"
          href="/blogs/some-slug"
        >
          <b>Some-slug</b>
        </Link>
      </div>
    </div>
  );
}
