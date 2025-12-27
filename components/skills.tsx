export default function Skills() {
  return (
    <section className="mb-6">
      <h2 className="text-lg font-semibold border-b pb-1 mb-2">Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <p className="font-medium">Frontend</p>
          <ul className="list-disc ml-4">
            <li>React.js, Next.js</li>
            <li>JavaScript (ES6+)</li>
            <li>Tailwind CSS, CSS, HTML</li>
            <li>UI/UX implementation</li>
          </ul>
        </div>

        <div>
          <p className="font-medium">Backend</p>
          <ul className="list-disc ml-4">
            <li>Node.js</li>
            <li>REST APIs</li>
            <li>MySQL, SQL queries</li>
          </ul>
        </div>

        <div>
          <p className="font-medium">Tools & Workflow</p>
          <ul className="list-disc ml-4">
            <li>Git, GitHub</li>
            <li>Vercel</li>
            <li>Sanity CMS</li>
            <li>Figma</li>
            <li>Agile / Scrum</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
