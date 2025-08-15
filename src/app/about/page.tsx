// src/app/about/page.js

'use client';

export default function About() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-100 to-gray-300 flex flex-col items-center justify-center px-6 py-12">
      
      {/* Header Section */}
      <h1 className="text-5xl sm:text-4xl font-extrabold text-gray-800 mb-6 font-serif">
        About <span className="text-blue-600">HuntingCoder</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl text-center mb-10">
        Welcome to <span className="font-semibold">HuntingCoder</span>, your go-to place for coding tutorials, tips, and inspiration. 
        We are passionate about making programming accessible, engaging, and fun for everyone — from beginners taking their first steps to experienced developers honing their craft.
      </p>

      {/* Info Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
          <h2 className="text-xl font-bold text-blue-600 mb-2">Our Mission</h2>
          <p className="text-gray-700">
            To empower developers through high-quality tutorials, problem-solving strategies, and real-world coding experiences.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
          <h2 className="text-xl font-bold text-blue-600 mb-2">What We Offer</h2>
          <p className="text-gray-700">
            Hands-on guides, coding challenges, project showcases, and the latest updates from the tech world — all in one place.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
          <h2 className="text-xl font-bold text-blue-600 mb-2">Our Vision</h2>
          <p className="text-gray-700">
            A global community of coders who learn, grow, and share together — building a future shaped by innovation and collaboration.
          </p>
        </div>
      </div>

      {/* Closing Section */}
      <div className="mt-12 max-w-3xl text-center">
        <p className="text-gray-600 text-lg">
          Whether you're here to debug your first program or explore advanced concepts, HuntingCoder is here to guide you every step of the way. 
          Let’s code, learn, and create something amazing — together.
        </p>
      </div>
    </div>
  );
}
