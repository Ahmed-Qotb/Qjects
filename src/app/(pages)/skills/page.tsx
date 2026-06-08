export default function Skills() {
  const skillGroups = [
    {
      title: "Languages",
      skills: ["JavaScript (ES6+)", "HTML5", "CSS3"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Next.js", "React.js", "Node.js", "Express.js"],
    },
    {
      title: "Database",
      skills: ["MongoDB"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "REST APIs"],
    },
    {
      title: "Concepts & Architecture",
      skills: [
        "Server Side Rendering (SSR)",
        "React Server Components",
        "Authentication & Authorization",
        "Role-Based Access Control (RBAC)",
        "Performance Optimization",
        "Responsive Design",
        "Custom WordPress Development",
      ],
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Teamwork", "Code Review", "Adaptability"],
    },
  ];

  return (
    <section className="pt-8 sm:pt-16 pb-8 sm:pb-14 text-base sm:text-lg">
      <div className="container">
        {skillGroups.map((group, index) => (
          <div key={group.title} className="pb-5">
            <h3 className="text-xl sm:text-2xl font-bold extra-color-text mb-3">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-silver text-silver px-3 py-1.5 rounded text-sm font-medium hover:border-flame hover:text-flame transition-colors ease-in-out duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
            {index < skillGroups.length - 1 && <hr className="mt-5" />}
          </div>
        ))}
      </div>
    </section>
  );
}
