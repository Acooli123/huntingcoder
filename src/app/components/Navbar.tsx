"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 z-50">
      <nav className="flex items-center justify-between bg-blue-200 py-4 px-6 drop-shadow-lg">
        {/* Logo */}
        <div className="text-lg font-bold">HuntingCoder</div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 list-none text-lg font-medium">
          <li><Link href="/home">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blogs">Blogs</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="flex flex-col items-center gap-4 bg-blue-100 py-4 md:hidden text-lg font-medium">
          <li><Link href="/home">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blogs">Blogs</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      )}
    </div>
  );
}
