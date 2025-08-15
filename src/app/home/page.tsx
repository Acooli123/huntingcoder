"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 via-gray-900 to-black h-[80vh] flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">
            HuntingCoder
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-6">
            A tech space for passionate coders — sharing tutorials, projects,
            and coding tips for developers of all levels.
          </p>
          <Link href="/blogs">
            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold shadow-lg transition">
              Read Blogs
            </button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About HuntingCoder</h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto">
          HuntingCoder is a hub for developers to explore coding tutorials,
          best practices, and software development insights. Whether you're into
          web development, data science, or app creation — we’ve got you covered.
        </p>
      </section>

      {/* Services / Topics */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6 hover:shadow-lg hover:shadow-purple-500/20 transition">
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-400">
              Learn HTML, CSS, JavaScript, and modern frameworks like React,
              Next.js, and Tailwind CSS.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 hover:shadow-lg hover:shadow-purple-500/20 transition">
            <h3 className="text-xl font-semibold mb-2">Data Science</h3>
            <p className="text-gray-400">
              Dive into Python, machine learning, and AI projects with step-by-step tutorials.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 hover:shadow-lg hover:shadow-purple-500/20 transition">
            <h3 className="text-xl font-semibold mb-2">Open Source Projects</h3>
            <p className="text-gray-400">
              Explore and contribute to community-driven coding projects.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Join the HuntingCoder Community</h2>
        <p className="mb-6">
          Get coding tutorials, project ideas, and development tips straight to your inbox.
        </p>
        <Link href="/contact">
          <button className="bg-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
}
