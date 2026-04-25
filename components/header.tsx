import { Github, Linkedin, Mail } from "lucide-react";

export default function Header() {
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-semibold">Jeniffer Souza</h1>

      <p className="mt-1 text-gray-600">
        Full Stack Software Engineer (Frontend-focused) | Systems Integration &
        Automation
      </p>

      <p className="text-gray-600">
        React • Next.js • TypeScript • Tailwind CSS • Node.js • MySQL • APIs •
        CMS
      </p>

      <p className="text-gray-600">Remote | USA-based teams</p>

      <div className="mt-3 flex flex-wrap gap-4 text-gray-700">
        <a
          href="mailto:devjenirfs@gmail.com"
          className="flex items-center gap-1 hover:underline"
        >
          <Mail size={16} /> devjenirfs@gmail.com
        </a>

        <a
          href="https://github.com/devjenirfs"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 hover:underline"
        >
          <Github size={16} /> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/jenirfs/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 hover:underline"
        >
          <Linkedin size={16} /> LinkedIn
        </a>
      </div>
    </header>
  );
}
