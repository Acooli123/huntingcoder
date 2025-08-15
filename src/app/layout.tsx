import './globals.css';
import Navbar from './components/Navbar';
import React, { ReactNode } from 'react';

export const metadata = {
  title: 'Hunting Coder',
  description: 'A blog for hunting coders by a coder',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="pt-16">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
