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

        <p className="mb-2">
          Develop and maintain a healthcare platform integrated with Jane App,
          supporting clinics in managing appointments, patients, staff, and
          operational data.
        </p>

        <ul className="list-disc ml-4 space-y-1">
          <li>
            Designed and developed a Chrome extension to integrate GoHighLevel
            and Jane App APIs, enabling cross-platform data synchronization and
            reducing manual operational workflows.
          </li>
          <li>
            Led the redesign and redevelopment of the reporting system,
            enhancing data clarity, usability, and overall user experience.
          </li>
          <li>
            Developed new reporting features and enhanced data visualization to
            support business decision-making.
          </li>
          <li>
            Developed sync log interfaces to track successful and failed
            operations, increasing system observability and enabling faster
            debugging of integration issues.
          </li>
          <li>
            Engineered automated reporting pipelines using Google
            Sheets API and Strapi, centralizing business data (users, payments,
            activity) and eliminating manual reporting processes.
          </li>
          <li>
            Implemented SQL queries and backend logic to support complex filters
            and reports.
          </li>
          <li>
            Contributed across the stack using Node.js and MySQL, supporting API
            integrations and data handling.
          </li>
          <li>
            Refactored core UI components (headers, footers, reporting
            interfaces), enhancing consistency and maintainability.
          </li>
          <li>
            Investigated and resolved production issues, particularly in API
            integrations and data consistency, strengthening system reliability.
          </li>
          <li>
            Partnered with product, support, and non-technical stakeholders
            to resolve issues and strengthen system reliability.
          </li>
          <li>Participated in UI/UX decisions using Figma.</li>
        </ul>

        <p className="mt-2 text-xs text-gray-600">
          <strong>Tech stack:</strong> Next.js, TypeScript, JavaScript, Tailwind
          CSS, Node.js, MySQL, SQL, Strapi, APIs, Jane App, GoHighLevel, Figma
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
            Built and maintained modern, high-performance web applications using
            Next.js and Tailwind CSS.
          </li>
          <li>
            Integrated Sanity for dynamic content management across multiple
            client projects. Structured content models and optimized content delivery workflows.
          </li>
          <li>
            Delivered projects across industries including healthcare, legal,
            and marketing.
          </li>
          <li>Deployed and managed applications using Vercel.</li>
          <li>Collaborated with international teams in agile environments.</li>
          <li>
            Improved UI consistency and user experience across multiple client
            platforms.
          </li>
        </ul>

        <p className="mt-2 text-xs text-gray-600">
          <strong>Tech stack:</strong> Next.js, JavaScript, Tailwind CSS,
          Sanity, Vercel
        </p>
      </div>
    </section>
  );
}
