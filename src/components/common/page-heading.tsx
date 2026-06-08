"use client";

import { usePathname } from "next/navigation";

export default function PageHeading() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const title = pathname.substring(1);

  return (
    <div className="heading-title text-center w-full py-11 p-5">
      <h2 className="text-4xl font-bold text-white my-5">{title}</h2>
    </div>
  );
}
