import Image from "next/image";
import nodejsLogo from "@/assets/images/nodejs-logo-svgrepo-com.svg";
import nextJsLogo from "@/assets/images/nextjs-removebg-preview.png";

export default function Home() {
  return (
    <section className="flex justify-center items-center pb-14 flex-col text-lg">
      {/* catching phrase */}
      <div className="text-center bg-gradient-to-b from-black to-carbon w-[100%] py-8 p-5">
        <h1 className="text-5xl font-bold text-white mb-5">Qjects</h1>
        <p className="text-lg sm:text-xl">
          A Portfolio for a
          <span className="extra-color-text font-bold"> Full-Stack </span>
          Developer focused on building fast, scalable web applications with
          <span className="extra-color-text font-bold"> Next.js </span>,
          <span className="extra-color-text font-bold"> Node.js </span>, and
          <span className="extra-color-text font-bold"> React </span>
          <br />
          with a strong emphasis on clean UI, performance, and user experience.
        </p>
      </div>

      <div className="container">
        {/* download cv button */}
        <div className="pb-10 flex justify-center items-center">
          <a
            href="/ahmed qotb 1 page cv.pdf"
            download
            className="border-2 border-silver p-2 px-5 rounded-lg bg-black font-bold hover:border-flame hover:bg-white hover:text-[black] ease-in-out duration-300"
          >
            Download CV
          </a>
        </div>
        <hr className="text-white mb-8 sm:mb-0" />
        {/* website description */}
        <div className="sm:flex justify-center items-center">
          {/* words */}
          <div className="sm:w-[50%]">
            <p className="px-5">
              &quot;This portfolio is built with
              <span className="font-extrabold"> Next.js</span>, leveraging
              server-side rendering and React Server Components for a fast,
              optimized experience. The stack also reflects my day-to-day
              work with
              <span className="font-extrabold"> Node.js </span>on the backend
              side of the projects I build. Navigate through the menu to explore
              my skills, experience, and projects.&quot;
            </p>
          </div>

          {/* logos */}
          <div className="flex gap-5 justify-center items-center sm:w-[50%]">
            <div>
              <Image
                src={nodejsLogo}
                width={500}
                height={500}
                alt="nodejs logo"
              />
            </div>
            <div className="pt-6">
              <Image
                src={nextJsLogo}
                width={500}
                height={500}
                alt="nextjs logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
