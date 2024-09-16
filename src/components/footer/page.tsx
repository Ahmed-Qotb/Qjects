import Image from "next/image";
import logo from "@/assets/images/Monogram-QJ-Logo-Design-by-Greenlines-Studios-removebg-preview.png";

function footer() {
  return (
    <footer className="main-color-dark-bg py-5">
      <div className="container flex justify-center items-center sm:gap-5 flex-wrap sm:flex-nowrap">
        {/* socials */}
        <div className="w-[33.33%]">1</div>
        {/* important links */}
        <div className="w-[33.33%]">2</div>
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
