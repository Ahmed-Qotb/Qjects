import Image from "next/image";
import nestJsLogo from "@/assets/images/nestjs-plain-wordmark.svg"
import nextJsLogo from "@/assets/images/nextjs-removebg-preview.png"
export default function Home() {
  return (
    <section className="flex justify-center items-center pb-14 flex-col text-lg">
      {/* catching phrase */}
      <div className=" text-center bg-gradient-to-b from-black to-[#121212]  w-[100%]  py-8 p-5">
        <h1 className="text-5xl font-bold text-white mb-5">Qjects</h1>
        <p className="text-lg sm:text-xl font">
          A Portfolio for a
          <span className="extra-color-text font-bold"> MERN Stack </span>
          Developer proficient in
          <span className="extra-color-text font-bold"> Next.js </span>,
          <span className="extra-color-text font-bold"> Nest.js </span>, and
          <span className="extra-color-text font-bold"> WordPress </span>
          <br />
          ready to deliver tailored solutions with your preferred technology
          stack.
        </p>
      </div>

      <div className="container">
        {/* download cv button */}
        <div className="pb-10 flex justify-center items-center">
          <button className="border-2 border-[#b3b3b3] p-2 px-5 rounded-lg bg-black font-bold hover:border-[#FF7517]  hover:bg-white hover:text-[black] ease-in-out duration-300">
            Download CV
          </button>
        </div>
        <hr className="text-white mb-8 sm:mb-0"/>
        {/* wepsite description */}
        <div className=" sm:flex justify-center items-center">
          {/* words */}
          <div className="sm:w-[50%]">
            <p className="px-5 ">
              "This website is built using
              <span className="font-extrabold"> Next.js</span> for the front
              end, providing a fast and efficient user interface, and
              <span className="font-extrabold"> Nest.js </span>for the back end,
              ensuring robust and scalable server-side functionality.
              Explore the rest of the navigation menu to discover more about my skills and projects."
            </p>
          </div>

          {/* images logo nest and d\next js */}
          <div className="flex gap-5 justify-center items-center sm:w-[50%]">
            <div>
            <Image 
            src={nestJsLogo}
            width={500}
            height={500}
            alt="nestjs logo"
            />
            </div>
            <div className="">
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
