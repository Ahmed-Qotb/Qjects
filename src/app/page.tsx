import Image from "next/image";
import gutsBg from "@/assets/images/fullBg.png";
import moon from "@/assets/images/Frame 347.png";
export default function Home() {
  return (
    <section className="flex justify-center items-center pb-14 flex-wrap">
      {/* catching phrase */}
      <div className=" text-center bg-gradient-to-b from-black to-[#121212]  w-[100%] p-5 py-8">
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
      {/* download cv button */}
      <div>
        <button className="border-2 border-[#b3b3b3] p-2 px-5 rounded-lg bg-black font-bold hover:border-[#FF7517]  hover:bg-white hover:text-[black] ease-in-out duration-300">
          Download CV
        </button>
      </div>
    </section>
  );
}
