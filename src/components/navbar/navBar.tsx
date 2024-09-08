import { Link, NavigationMenu } from "@radix-ui/react-navigation-menu";
import Image from "next/image";
import logo from "@/assets/images/Monogram-QJ-Logo-Design-by-Greenlines-Studios-removebg-preview.png";
function navBar() {
  return (
    <nav className="main-color-dark-bg fixed top-0 left-0 right-0">
      <div className="container flex items-center justify-between p-4  ">
        <div className="logo">
          <Image
            src={logo}
            width={50}
            height={50}
            alt="qjects logo"
            className="w-[50]"
          />
        </div>

        <NavigationMenu>
          <ul className="flex gap-4 justify-center content-center ">
            <li className="main-color-dark-bg p-2 rounded-md">
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
          </ul>
        </NavigationMenu>
      </div>
    </nav>
  );
}

export default navBar;
