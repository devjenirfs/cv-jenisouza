import Header from "@/components/header";
import Profile from "@/components/profile";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Skills from "@/components/skills";
import Languages from "@/components/languages";
import Footer from "@/components/footer";

export default function CV() {
  return (
    <main className="max-w-[900px] mx-auto bg-white p-10 text-gray-800 text-sm leading-relaxed print:p-0 print:text-black">
      <Header />
      <Profile />
      <Experience />
      <Education />
      <Skills />
      <Languages />
      <Footer />
    </main>
  );
}
