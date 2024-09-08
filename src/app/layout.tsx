import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./styles/globals.css";
import NavBar from "../components/navbar/navBar";
import Footer from "@/components/footer/page";
const mainFont = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qjects",
  description: "a portflio wepsite for a fullstack web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mainFont.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
