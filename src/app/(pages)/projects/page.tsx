import Link from "next/link";
import { ExternalLink, Github, Play } from "lucide-react";

const projects = [
  {
    title: "Arabic Medical Chatbot",
    badge: "Graduation Project",
    description:
      "An AI-powered medical assistant platform that provides symptom-based guidance through a conversational Arabic-language interface. Built end-to-end as a full-stack Next.js application.",
    responsibilities: [
      "Built the full-stack application architecture using Next.js.",
      "Implemented secure authentication and session management with Better Auth.",
      "Developed backend APIs and core business logic.",
      "Integrated MongoDB for persistent user and conversation data.",
      "Built a fully responsive UI with Tailwind CSS.",
    ],
    tech: ["Next.js", "MongoDB", "Better Auth", "Tailwind CSS", "REST APIs"],
    links: [
      { href: "https://drive.google.com/file/d/1BiLeRntfwSqZPZ9aZ-zR3SLXyb-wi0AG/view?usp=sharing", Icon: Play, label: "Demo Video" },
      {
        href: "https://github.com/Ahmed-Qotb/grad-project",
        Icon: Github,
        label: "Repository",
      },
    ],
  },
  {
    title: "Rose – E-Commerce Platform",
    badge: "Elevate JSB Program",
    description:
      "A modern e-commerce platform with a role-based administrative dashboard, built collaboratively during the Elevate Tech JSB Advanced Front-End Program.",
    responsibilities: [
      "Implemented Role-Based Access Control (RBAC) for admin and customer roles.",
      "Built reusable, composable dashboard and data table components.",
      "Optimized rendering performance for data-heavy product and order views.",
      "Implemented authentication and session management with NextAuth.",
    ],
    tech: ["Next.js", "React", "NextAuth", "Tailwind CSS"],
    links: [
      {
        href: "https://github.com/Ahmed-Qotb/Rose-ecommerce-platform",
        Icon: Github,
        label: "Repository",
      },
    ],
  },
];

export default function Projects() {
  return (
    <section className="pt-8 sm:pt-16 pb-8 sm:pb-14 text-base sm:text-lg">
      <div className="container">
        {/* Context note */}
        <div className="border border-silver rounded-lg p-5 mb-8 bg-black">
          <p className="text-silver text-base">
            This portfolio features two primary projects:{" "}
            <span className="font-bold text-white">Arabic Medical Chatbot</span>{" "}
            (my graduation project) and{" "}
            <span className="font-bold text-white">Rose</span> (developed during
            the Elevate JSB program). I chose to showcase these two because they
            best represent the depth and range of my full-stack development
            experience — rather than listing every training exercise or
            assignment along the way.
          </p>
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-silver rounded-lg p-5 bg-black hover:border-flame transition-colors ease-in-out duration-300"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <h3 className="text-lg sm:text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <span className="text-xs border border-flame text-flame px-2 py-0.5 rounded w-fit">
                  {project.badge}
                </span>
              </div>

              {/* Description */}
              <p className="text-silver mb-4">{project.description}</p>

              {/* Responsibilities */}
              <div className="mb-4">
                <p className="font-semibold text-white mb-2">What I built:</p>
                <ul className="list-disc list-inside space-y-1 text-silver">
                  {project.responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div className="mb-5">
                <p className="font-semibold text-white mb-2">Tech stack:</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-sm border border-silver text-silver px-3 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                {project.links.map(({ href, Icon, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    className="flex items-center gap-1.5 border border-silver text-silver px-3 py-1.5 rounded text-sm hover:border-flame hover:text-flame transition-colors ease-in-out duration-200"
                  >
                    <Icon size={14} />
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
