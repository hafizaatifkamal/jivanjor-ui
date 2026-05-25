"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="flex items-center justify-between relative max-w-7xl mx-auto w-full py-4 px-6 font-google-sans">
      <div className="">
        <Image
          src="/images/logo.png"
          alt="Jivanjor Logo"
          loading="eager"
          width={120}
          height={72}
        />
      </div>
      <div className="hidden xl:flex items-center justify-center text-lg font-medium gap-4">
        <Link href="#">About</Link>
        <Link href="#">Products</Link>
        <Link href="#">Applications</Link>
        <Link href="#">Knowledge Hub</Link>
        <Link href="#">Partner</Link>
        <Link href="#">Contact</Link>
      </div>

      <button
        onClick={toggleMenu}
        className="xl:hidden mr-2 relative transition-colors z-100"
        aria-label="Toggle menu"
      >
        <div className="flex flex-col items-end justify-between w-6 h-4.5">
          <span
            className={`block h-0.5 w-full bg-primary transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-3/4 bg-primary transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-primary transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>
      </button>
      {open ? <MobileNav onClose={() => setOpen(false)} /> : null}
    </nav>
  );
}
