import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full fixed">
      <nav className="row-start-1 flex -mt-16 items-center justify-center bg-blue-200  py-4 px-6 drop-shadow-lg">
        <ul className="flex gap-6 list-none text-lg font-medium">
          <li><Link href="/home">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blogs">Blogs</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}
