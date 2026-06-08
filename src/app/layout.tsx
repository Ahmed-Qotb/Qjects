import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./styles/globals.css";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import PageHeading from "@/components/common/page-heading";

const mainFont = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qjects",
  description: "A portfolio website for a fullstack web developer",
  icons: {
    icon: "/favicon3.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mainFont.className}>
        <Navbar />
        <PageHeading />
        {children}
        <Footer />
      </body>
    </html>
  );
}
