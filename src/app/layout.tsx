// src/app/layout.js
import './globals.css';
import Navbar from './components/Navbar';
import React from 'react';

export const metadata = {
  title: 'Hunting Coder',
  description: 'A blog for hunting coders by a coder',
};

// ✅ MUST use <html> and <body> inside a Server Component
// ✅ 'children' is passed to the layout component
// ✅ Must use the `Layout` function as default export with correct typing

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="pt-16"> {/* Add padding if Navbar is fixed */}
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
