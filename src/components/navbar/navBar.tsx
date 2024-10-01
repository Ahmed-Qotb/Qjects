"use client";
import { Link, NavigationMenu } from "@radix-ui/react-navigation-menu";
import Image from "next/image";
import logo from "@/assets/images/Monogram-QJ-Logo-Design-by-Greenlines-Studios-removebg-preview.png";
import { usePathname } from "next/navigation";
import { useState } from "react";
import navMenuLogo from "@/assets/images/navMenuLogo.png";
function navBar() {
  // ? array of nav links
  const navLinks: { href: string; label: string }[] = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/about",
      label: "About",
    },
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

  // ? pathname of the current page
  const pathName: string = usePathname();

  // ? nav bar state (open or closed)
  const [navState, setnavState] = useState(false);
  const ChangeNavState = () => {
    setnavState(!navState);
  };

  return (
    <nav className="main-color-dark-bg sticky top-0">
      <NavigationMenu>
        <div className="container flex items-center justify-between p-4">
          <Link href="/">
            <div className="logo">
              <Image
                src={logo}
                width={50}
                height={50}
                alt="qjects logo"
                className="w-[50]"
              />
            </div>
          </Link>
          {/* desktop view */}
          <ul className="hidden sm:flex gap-4 justify-center content-center">
            {navLinks.map(
              (link: { href: string; label: string }, index: number) => (
                <li>
                  <Link
                    key={index}
                    href={link.href}
                    className={`${
                      pathName === link.href
                        ? "text-orange-400 font-extrabold"
                        : ""
                    } hover:text-orange-300 transition-colors ease-in duration-150 font-semibold`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* mobile view */}
          <div className="sm:hidden">
            <button onClick={ChangeNavState}>
              <Image
                src={navMenuLogo}
                width={35}
                height={35}
                alt="nav Menu logo"
                className="w-[35]"
              />
            </button>
            {navState && (
              <ul
                className={` transition-all duration-1000 delay-75 ease-in-out flex flex-col gap-4 justify-center bg-[#000000ec] content-center absolute right-4 p-5 rounded-lg border-[2px] border-[#FF7517] w-[40%]`}
              >
                {navLinks.map(
                  (link: { href: string; label: string }, index: number) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className={`${
                          pathName === link.href
                            ? "text-white font-extrabold"
                            : "text-gray-500"
                        } hover:text-orange-300 transition-colors ease-in duration-150 font-semibold`}
                      >
                        {link.label}
                      </Link>
                      <hr
                        className={`${
                          pathName === link.href
                            ? "border-[white]"
                            : "border-gray-500"
                        }`}
                      />
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
        </div>
      </NavigationMenu>
    </nav>
  );
}

export default navBar;
