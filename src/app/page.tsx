"use client";

import Image from "next/image";
import Head from "next/head";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";

export default function Home() {
  return (
    <div className="font-sans flex items-center justify-center w-screen h-screen overflow-hidden bg-gray-100">
      <style jsx>{`
        html,
        body {
          margin: 0;
          padding: 0;
          height: 100%;
          overflow: hidden; /* Prevent page scrollbars */
        }
        .blogs {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1.25rem;
        }
        .blogItem {
          padding: 1rem;
          border-radius: 0.5rem;
          background-color: #f0d5d5ff;
          box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
          transition: transform 0.2s ease;
        }
        .blogItem:hover {
          transform: translateY(-3px);
        }
      `}</style>

      <Head>
        <title>Hunting Coder</title>
        <meta
          name="description"
          content="A blog for hunting coders by a coder"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center gap-4 max-h-[90vh] overflow-hidden px-4">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center">
          Hunting Coder
        </h1>

        {/* Profile Circle */}
        <div className="flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 border-4 border-blue-500 rounded-full overflow-hidden shadow-lg">
          <img
            src="/coder.jpg"
            alt="Coder"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Tagline */}
        <p className="text-sky-500 text-sm sm:text-base md:text-lg">
          &lt;HuntingCoder/&gt;
        </p>

        {/* Blog Section */}
        <div className="blogs w-full max-w-lg">
          <h2 className="text-lg sm:text-xl md:text-2xl italic font-serif font-bold text-center">
            Popular Blogs
          </h2>

          {[1, 2, 3].map((_, index) => (
            <div key={index} className="blogItem">
              <h1 className="text-base sm:text-lg font-bold font-mono text-center">
                How to Learn JavaScript in 2025?
              </h1>
              <p className="text-sm sm:text-base text-center">
                JavaScript is a language used to design logic for the web.
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
