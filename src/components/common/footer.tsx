import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github, Mail } from "lucide-react";
import logo from "@/assets/images/Monogram-QJ-Logo-Design-by-Greenlines-Studios-removebg-preview.png";

const quickLinks = [
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black py-5 sm:py-0 sm:pb-7">
      <div className="container flex justify-center sm:items-center sm:gap-5 flex-wrap sm:flex-nowrap">
        {/* Social links */}
        <div className="w-[50%] text-center">
          <h3 className="font-extrabold text-white text-xl">Social Links</h3>
          <ul className="flex justify-center items-center gap-4 py-5">
            <li>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/ahmed-qotb-043850296/"
              >
                <Linkedin className="bg-black" color="white" />
              </Link>
            </li>
            <li>
              <Link target="_blank" href="https://github.com/Ahmed-Qotb">
                <Github className="bg-black hover:text-flame" color="white" />
              </Link>
            </li>
            <li>
              <Link target="_blank" href="mailto:ahmedhassan99fg@gmail.com">
                <Mail className="bg-black" color="white" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick links */}
        <div className="w-[50%] text-center">
          <h3 className="font-extrabold text-white text-xl">Quick Links</h3>
          <ul className="flex flex-col">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-flame">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo + description */}
        <div className="w-[100%]">
          <Image
            width={150}
            height={150}
            src={logo}
            alt="Qjects logo"
            className="mx-auto"
          />
          <div className="footer-words flex text-center gap-3">
            <p className="text-center border-b-2 border-t-2 py-4 border-silver">
              Welcome to <span className="font-extrabold">Q-jects!</span> I&apos;m
              a Full Stack Developer specializing in the MERN stack, Next.js,
              and WordPress. This site highlights my skills and projects, with a
              focus on reusable code. Explore to see examples of my work and my
              coding style.
              <br />
              <span className="font-extrabold">Thanks for visiting!</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
