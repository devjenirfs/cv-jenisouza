import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-row justify-between mb-8">
      <div className="flex flex-col">
        <h1 className="text-3xl font-semibold">Jeniffer Souza</h1>

        <p className="mt-1 text-gray-600">
          Full Stack Software Engineer (Frontend-focused)
        </p>

        <p className="text-gray-600">
          React • Next.js • JavaScript • Tailwind CSS • Node.js • MySQL
        </p>

        <p className="text-gray-600">Remote | USA-based teams</p>

        <div className="mt-3 flex flex-wrap gap-4 text-gray-700">
          <a
            href="mailto:jenifferap@gmail.com"
            className="flex items-center gap-1 hover:underline"
          >
            <Mail size={16} /> jenifferap@gmail.com
          </a>

          <a
            href="https://github.com/SEU_GITHUB"
            target="_blank"
            className="flex items-center gap-1 hover:underline"
          >
            <Github size={16} /> GitHub
          </a>

          <a
            href="https://linkedin.com/in/SEU_LINKEDIN"
            target="_blank"
            className="flex items-center gap-1 hover:underline"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
      <div className="rounded-full w-26 h-26 overflow-hidden ml-6">
        <Image
          src="/jeni-profile.jpeg"
          alt="Jeniffer Souza"
          width={100}
          height={100}
          className="object-cover select-none pointer-events-none"
        />
      </div>
    </header>
  );
}
