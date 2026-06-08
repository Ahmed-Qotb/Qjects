import Link from "next/link";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const contactItems = [
    {
      Icon: Mail,
      label: "Email",
      value: "ahmedhassan99fg@gmail.com",
      href: "mailto:ahmedhassan99fg@gmail.com",
    },
    {
      Icon: Phone,
      label: "Phone",
      value: "+20 114 051 8812",
      href: "tel:+201140518812",
    },
    {
      Icon: Github,
      label: "GitHub",
      value: "github.com/Ahmed-Qotb",
      href: "https://github.com/Ahmed-Qotb",
    },
    {
      Icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ahmed-qotb",
      href: "https://www.linkedin.com/in/ahmed-qotb-043850296/",
    },
  ];

  return (
    <section className="pt-8 sm:pt-16 pb-8 sm:pb-14 text-base sm:text-lg">
      <div className="container">
        {/* Intro */}
        <div className="pb-5">
          <h3 className="text-xl sm:text-2xl font-bold extra-color-text">Get In Touch</h3>
          <p className="text-justify mt-2">
            I&apos;m currently open to new opportunities — whether it&apos;s a
            full-time role, a freelance project, or a collaboration. If you have
            a position that fits my profile, a project you&apos;d like to
            discuss, or simply want to connect, feel free to reach out through
            any of the channels below. I&apos;ll get back to you as soon as
            possible.
          </p>
          <hr className="mt-5" />
        </div>

        {/* Contact cards */}
        <div className="pb-5">
          <h3 className="text-xl sm:text-2xl font-bold extra-color-text mb-4">
            Contact Details
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactItems.map(({ Icon, label, value, href }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 border border-silver rounded-lg p-4 bg-black hover:border-flame group transition-colors ease-in-out duration-200"
              >
                <Icon
                  size={24}
                  className="text-silver group-hover:text-flame transition-colors ease-in-out duration-200 flex-shrink-0"
                />
                <div>
                  <p className="text-sm text-silver">{label}</p>
                  <p className="font-semibold text-white text-base">{value}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
