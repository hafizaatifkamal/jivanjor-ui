"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <header
      id="main-landing-header"
      className="fixed top-0 left-0 right-0 z-50 w-full h-22 bg-white backdrop-blur-md transition-all duration-300 flex items-center"
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto w-full px-6 font-google-sans">
        <div className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="Jivanjor Logo"
            loading="eager"
            width={120}
            height={72}
          />
        </div>
        <div className="hidden lg:flex items-center justify-center text-lg font-medium gap-6">
          <Link href="#" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Products
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Applications
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Knowledge Hub
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Partner
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="lg:hidden mr-2 relative transition-colors z-60 cursor-pointer"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col items-end justify-between w-6 h-4.5">
            <span
              className={`block h-0.5 w-full bg-primary transition-all duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-primary transition-all duration-300 ${
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
    </header>
  );
}
