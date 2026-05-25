"use client";
import Link from "next/link";
import { useEffect } from "react";

interface MobileNavProps {
  onClose?: () => void;
}

// Furniture & Woodwork
// Laminates & Finishing
// Kitchen & Storage Units
// Moisture-Prone Woodwork
// PVC & Edge Finishing
// Home Repairs & DIY
// Foam & Acoustic Bonding
// OEM & Bulk Woodwork

export default function MobileNav({ onClose }: MobileNavProps) {
  const navLinks = [
    { label: "About", href: "#", children: { lable: "", href: "" } },
    { label: "Products", href: "#" },
    { label: "Applications", href: "#" },
    { label: "Knowledge Hub", href: "#" },
    { label: "Partner", href: "#" },
    { label: "Contact", href: "#" },
  ];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <section className="fixed inset-0 top-20 bg-white z-50 h-screen w-screen overflow-y-auto animate-in fade-in duration-300">
      <div className="flex flex-col gap-8 pt-12 p-6">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-lg font-semibold hover:text-primary transition-colors duration-200"
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
