export default function Experience() {
  const deltaSquareProjects = [
    "Fanni Mobtaker",
    "IEEE Smart Mobility",
    "SSP Challenge",
    "SeaPerch",
    "UAE IoT and AI Challenge",
  ];

  return (
    <section className="pt-8 sm:pt-16 pb-8 sm:pb-14 text-base sm:text-lg">
      <div className="container">
        {/* Delta Square */}
        <div className="pb-5">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
            <div>
              <h3 className="text-lg sm:text-2xl font-bold text-white">
                Web Developer Intern
              </h3>
              <p className="extra-color-text font-semibold">Delta Square</p>
            </div>
            <div className="flex flex-col sm:items-end gap-1 mt-1">
              <span className="text-sm text-silver">
                July 2024 – November 2024
              </span>
              <span className="text-xs border border-flame text-flame px-2 py-0.5 rounded w-fit">
                Hybrid
              </span>
            </div>
          </div>
          <ul className="list-disc list-inside space-y-1.5 text-silver">
            <li>
              Built and maintained multiple live event and competition websites.
            </li>
            <li>
              Developed custom WordPress functionality and plugins tailored to
              each event&apos;s requirements.
            </li>
            <li>
              Implemented Wordfence security configurations and responded to bot
              attacks and security incidents.
            </li>
            <li>
              Created custom judging systems and live leaderboard features for
              competition platforms.
            </li>
            <li>
              Developed custom JavaScript functionality for client-specific
              interactions.
            </li>
            <li>
              Worked with cPanel and production hosting environments under live
              traffic.
            </li>
          </ul>
          <div className="mt-4">
            <p className="font-semibold text-white mb-2">Projects involved:</p>
            <div className="flex flex-wrap gap-2">
              {deltaSquareProjects.map((project) => (
                <span
                  key={project}
                  className="text-sm border border-silver text-silver px-3 py-1 rounded"
                >
                  {project}
                </span>
              ))}
            </div>
          </div>
          <hr className="mt-6" />
        </div>

        {/* Elevate Tech */}
        <div className="pb-5">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
            <div>
              <h3 className="text-lg sm:text-2xl font-bold text-white">
                Advanced Front-End Program
              </h3>
              <p className="extra-color-text font-semibold">
                Elevate Tech – JSB
              </p>
            </div>
            <div className="flex flex-col sm:items-end gap-1 mt-1">
              <span className="text-sm text-silver">
                March 2025 – August 2025
              </span>
              <span className="text-xs border border-silver text-silver px-2 py-0.5 rounded w-fit">
                Training Program
              </span>
            </div>
          </div>
          <ul className="list-disc list-inside space-y-1.5 text-silver">
            <li>
              Worked in a structured team environment simulating real-world
              development workflows.
            </li>
            <li>
              Participated actively in code reviews and collaborative pull
              requests.
            </li>
            <li>
              Managed branches and contributions through established Git
              workflows.
            </li>
            <li>
              Implemented Role-Based Access Control (RBAC) for multi-role user
              systems.
            </li>
            <li>Built reusable, composable table and dashboard components.</li>
            <li>
              Applied performance optimization techniques for data-heavy views.
            </li>
            <li>
              Worked extensively with Next.js and modern React patterns
              including Server Components.
            </li>
          </ul>
          <hr className="mt-6" />
        </div>

        {/* Education */}
        <div className="pb-5">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
            <div>
              <h3 className="text-lg sm:text-2xl font-bold text-white">
                B.Sc. Information Technology and Communication Engineering
              </h3>
              <p className="extra-color-text font-semibold">
                Suez Canal University — Ismailia, Egypt
              </p>
            </div>
            <div className="flex flex-col sm:items-end gap-1 mt-1">
              <span className="text-sm text-silver">2021 – 2026</span>
              <span className="text-xs border border-silver text-silver px-2 py-0.5 rounded w-fit">
                Final Year
              </span>
            </div>
          </div>
          <p className="text-silver">
            Pursuing a Bachelor&apos;s degree in ITCE, covering computer science
            fundamentals, networking, and software engineering principles. The
            graduation project — an{" "}
            <span className="font-bold text-white">Arabic Medical Chatbot</span>{" "}
            — is a full-stack Next.js application developed and maintained
            alongside university coursework.
          </p>
        </div>
      </div>
    </section>
  );
}
