"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import navMenuLogo from "@/assets/images/navMenuLogo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function NavLinks() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop */}
      <ul className="hidden sm:flex gap-4 justify-center content-center">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`${
                pathname === link.href ? "text-orange-400 font-extrabold" : ""
              } hover:text-orange-300 transition-colors ease-in duration-150 font-semibold`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile */}
      <div className="sm:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <Image
            src={navMenuLogo}
            width={35}
            height={35}
            alt="open navigation menu"
          />
        </button>
        {isOpen && (
          <ul className="transition-all duration-1000 delay-75 ease-in-out flex flex-col gap-4 justify-center bg-overlay content-center absolute right-4 p-5 rounded-lg border-[2px] border-flame w-[40%]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${
                    pathname === link.href
                      ? "text-white font-extrabold"
                      : "text-gray-500"
                  } hover:text-orange-300 transition-colors ease-in duration-150 font-semibold`}
                >
                  {link.label}
                </Link>
                <hr
                  className={
                    pathname === link.href ? "border-[white]" : "border-gray-500"
                  }
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
