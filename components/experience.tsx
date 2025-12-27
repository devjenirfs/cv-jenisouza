export default function Experience() {
  return (
    <section className="mb-6">
      <h2 className="text-lg font-semibold border-b pb-1 mb-3">Experience</h2>

      {/* Trust Driven Care */}
      <div className="mb-5 break-inside-avoid">
        <div className="flex justify-between items-baseline">
          <h3 className="font-medium">
            Full Stack Software Engineer — Trust Driven Care (TDC)
          </h3>
          <span className="text-xs text-gray-600">Sep 2025 – Present</span>
        </div>
        <p className="text-gray-600 text-xs mb-2">Remote (USA)</p>

        <ul className="list-disc ml-4 space-y-1">
          <li>
            Work on a healthcare platform integrated with JaneApp, used by
            clinics to manage appointments, patients, staff, and operational
            reports.
          </li>
          <li>
            Led the redesign and redevelopment of the reporting system,
            improving data clarity, usability, and overall user experience.
          </li>
          <li>
            Developed frontend features using Next.js, JavaScript, Tailwind CSS,
            and CSS, focusing on performance and accessibility.
          </li>
          <li>
            Designed and implemented SQL queries and backend logic to support
            complex filters and reports.
          </li>
          <li>
            Contributed across the stack using Node.js and MySQL, collaborating
            closely with product and non-technical stakeholders.
          </li>
          <li>
            Participated in UI/UX decisions using Figma.
          </li>
        </ul>

        <p className="mt-2 text-xs text-gray-600">
          <strong>Tech stack:</strong> Next.js, JavaScript, Tailwind CSS, CSS,
          Node.js, MySQL, SQL, JaneApp, Figma
        </p>
      </div>

      {/* The Casely Group */}
      <div className="mb-5 break-inside-avoid">
        <div className="flex justify-between items-baseline">
          <h3 className="font-medium">
            Frontend Software Engineer — The Casely Group
          </h3>
          <span className="text-xs text-gray-600">Sep 2024 – Sep 2025</span>
        </div>
        <p className="text-gray-600 text-xs mb-2">Remote (USA)</p>

        <ul className="list-disc ml-4 space-y-1">
          <li>
            Built and maintained modern, high-performance websites for multiple
            clients using Next.js and Tailwind CSS.
          </li>
          <li>
            Delivered projects across industries including healthcare, legal,
            and marketing.
          </li>
          <li>Integrated Sanity CMS and deployed applications using Vercel.</li>
          <li>
            Collaborated with international teams in agile environments.
          </li>
        </ul>

        <p className="mt-2 text-xs text-gray-600">
          <strong>Tech stack:</strong> Next.js, JavaScript, Tailwind CSS, Sanity
          CMS, Vercel
        </p>
      </div>
    </section>
  );
}
