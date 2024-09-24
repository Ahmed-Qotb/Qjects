import Image from "next/image";
import logo from "@/assets/images/Monogram-QJ-Logo-Design-by-Greenlines-Studios-removebg-preview.png";
import { SiLinkedin } from "@icons-pack/react-simple-icons";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { SiGmail } from "@icons-pack/react-simple-icons";
import Link from "next/link";

function footer() {
  // ? array of nav links
  const navLinks: { href: string; label: string }[] = [
    {
      href: "/skills",
      label: "Skills",
    },
    {
      href: "/projects",
      label: "Projects",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ];

  return (
    <footer className="main-color-dark-bg py-5">
      <div className="container flex justify-center sm:gap-5 flex-wrap sm:flex-nowrap">
        {/* socials */}
        <div className="w-[50%] text-center">
          <h3 className="font-extrabold text-white text-xl">Social Links</h3>
          <ul className="flex justify-center items-center gap-4 py-5">
            {/* linked in */}
            <li>
              <Link href={`https://www.linkedin.com/in/ahmed-qotb-043850296/`}>
                <SiLinkedin className="bg-black " color="white" />
              </Link>
            </li>
            {/* github */}
            <li>
              <Link href={`https://github.com/Ahmed-Qotb`}>
                <SiGithub
                  className="bg-black hover:text-[#FF7517]"
                  color="white"
                />
              </Link>
            </li>
            {/* gmail email to */}
            <li>
              <Link href={"mailto:ahmedhassan99fg@gmail.com"}>
                <SiGmail className="bg-black" color="white" />
              </Link>
            </li>
          </ul>
        </div>
        {/* important links */}
        <div className="w-[50%]  text-center">
          <h3 className="font-extrabold text-white text-xl">Quick Links</h3>
          <ul className="flex flex-col items-center">
          {navLinks.map(
              (link: { href: string; label: string }, index: number) => (
                <li className="">
                  <Link
                    key={index}
                    href={link.href}
                    className="hover:text-[#FF7517]"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
        {/* logo with description */}
        <div className="w-[100%] ">
          <Image
            width={150}
            height={150}
            src={logo}
            alt="qjects logo"
            className="sm:width-[200px] sm:height-[200px] mx-auto"
          />
          <div className="footer-words flex text-center gap-3">
            <p className="text-center border-b-2 border-t-2 py-4 border-[#b3b3b3]">
              Welcome to <span className="font-extrabold">Q-jects!</span> I'm a
              Full Stack Developer specializing in the MERN stack, Next.js, and
              WordPress. This site highlights my skills and projects, with a
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

export default footer;
