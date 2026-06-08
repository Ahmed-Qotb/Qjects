import Link from "next/link";

export default function About() {
  return (
    <section className="pt-8 sm:pt-16 pb-8 sm:pb-14 text-base sm:text-lg">
      <div className="container">
        {/* About Me */}
        <div className="pb-5">
          <h3 className="text-xl sm:text-2xl font-bold extra-color-text">About Me</h3>
          <p className="text-left sm:text-justify">
            I&apos;m Ahmed, a{" "}
            <span className="font-bold">Full-Stack Web Developer</span> with
            hands-on experience building scalable web applications using{" "}
            <span className="font-bold">
              Next.js, React.js, Node.js, Express.js, and MongoDB
            </span>
            . I care about clean architecture, secure authentication, and
            writing maintainable code that holds up under real-world conditions.
          </p>
          <p className="text-left sm:text-justify mt-3">
            I&apos;m currently finishing my{" "}
            <span className="font-bold">
              Bachelor&apos;s degree in Information Technology and Communication
              Engineering (ITCE) at Suez Canal University, Ismailia, Egypt
            </span>{" "}
            (2021 – 2026). Alongside my studies, I have built real experience
            through a professional internship, an advanced training program, and
            independently developed projects — including my graduation project.
          </p>
          <p className="mt-3">
            👉 Head over to the{" "}
            <Link
              href="/experience"
              className="font-bold underline hover:text-flame"
            >
              Experience
            </Link>{" "}
            section to see the full timeline of my professional background and
            training.
          </p>
          <hr className="mt-5" />
        </div>

        {/* Developer Journey */}
        <div className="pb-5">
          <h3 className="text-xl sm:text-2xl font-bold extra-color-text">
            Developer Journey
          </h3>
          <p className="text-left sm:text-justify">
            My path into web development started during university, where I
            built a solid foundation in programming fundamentals and then
            shifted my focus to mastering modern full-stack development. I
            invested serious time in the{" "}
            <span className="font-bold">MERN stack</span> and progressively
            deepened my expertise in{" "}
            <span className="font-bold">
              Next.js, server-side rendering, and React Server Components
            </span>
            .
          </p>
          <p className="text-left sm:text-justify mt-3">
            In mid-2024, I joined{" "}
            <span className="font-bold">Delta Square</span> as a Web Developer
            Intern, where I built and maintained live competition and event
            websites, implemented WordPress security configurations, and worked
            directly in production hosting environments. It was formative work —
            handling bot attacks, deploying under deadlines, and building custom
            judging systems for real events.
          </p>
          <p className="text-left sm:text-justify mt-3">
            I then joined the{" "}
            <span className="font-bold">
              Elevate Tech JSB Advanced Front-End Program
            </span>
            , where I collaborated in a team setting on a production-grade
            e-commerce platform, practicing{" "}
            <span className="font-bold">
              code reviews, Git workflows, RBAC systems, and performance
              optimization
            </span>
            .
          </p>
          <hr className="mt-5" />
        </div>

        {/* Projects & Goals */}
        <div className="pb-5">
          <h3 className="text-xl sm:text-2xl font-bold extra-color-text">
            Projects &amp; Goals
          </h3>
          <p className="text-left sm:text-justify">
            The two projects in this portfolio represent my most significant
            work:{" "}
            <span className="font-bold">Arabic Medical Chatbot</span> — my
            graduation project, a full-stack AI-assisted medical platform — and{" "}
            <span className="font-bold">Rose</span>, an e-commerce platform
            with a role-based admin dashboard built during the Elevate JSB
            program. Both required applying full-stack skills end-to-end.
          </p>
          <p className="text-left sm:text-justify mt-3">
            Going forward, I&apos;m focused on deepening my expertise in{" "}
            <span className="font-bold">
              software architecture, scalable API design, and advanced React
              patterns
            </span>
            . I&apos;m actively looking for opportunities where I can
            contribute, grow, and build things that matter.
          </p>
        </div>
      </div>
    </section>
  );
}
