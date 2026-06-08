import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/Monogram-QJ-Logo-Design-by-Greenlines-Studios-removebg-preview.png";
import NavLinks from "@/components/common/nav-links";

export default function Navbar() {
  return (
    <nav className="main-color-dark-bg sticky top-0 z-10">
      <div className="container flex items-center justify-between p-4">
        <Link href="/">
          <Image src={logo} width={50} height={50} alt="Qjects logo" />
        </Link>
        <NavLinks />
      </div>
    </nav>
  );
}
