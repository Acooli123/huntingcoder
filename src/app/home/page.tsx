"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 via-gray-900 to-black min-h-[70vh] flex items-center justify-center text-center px-4 sm:px-6">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            HuntingCoder
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-6">
            A tech space for passionate coders — sharing tutorials, projects,
            and coding tips for developers of all levels.
          </p>
          <Link href="/blogs">
            <button className="bg-purple-600 hover:bg-purple-700 px-5 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold shadow-lg transition">
              Read Blogs
            </button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
          About HuntingCoder
        </h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto text-sm sm:text-base">
          HuntingCoder is a hub for developers to explore coding tutorials,
          best practices, and software development insights. Whether you're into
          web development, data science, or app creation — we’ve got you covered.
        </p>
      </section>

      {/* Services / Topics */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-center">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Web Development",
              desc: "Learn HTML, CSS, JavaScript, and modern frameworks like React, Next.js, and Tailwind CSS."
            },
            {
              title: "Data Science",
              desc: "Dive into Python, machine learning, and AI projects with step-by-step tutorials."
            },
            {
              title: "Open Source Projects",
              desc: "Explore and contribute to community-driven coding projects."
            }
          ].map((service, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-lg p-5 sm:p-6 hover:shadow-lg hover:shadow-purple-500/20 transition"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-600 text-white py-12 sm:py-16 text-center px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
          Join the HuntingCoder Community
        </h2>
        <p className="mb-5 sm:mb-6 text-sm sm:text-base max-w-xl mx-auto">
          Get coding tutorials, project ideas, and development tips straight to your inbox.
        </p>
        <Link href="/contact">
          <button className="bg-black px-5 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
}
