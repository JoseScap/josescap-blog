import LinkedIn from "@/components/icons/linkedin";
import linkedin from "@/icons/linkedin.svg";
import Image from "next/image";

export default function About() {
  return (
    <main className="flex-1 md:ml-64 lg:mr-64">
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <div className="space-y-4">
          <p>Hi, I'm Juan José Puente Scapolatempo, also known as JoseScap, a software engineer with over 4.5 years of experience in developing applications.</p>
          <p>Throughout my career, I've worked on web applications, mobile apps, and APIs across various programming languages and technologies.</p>
          <p>Currently, I'm in the process of reinventing my professional profile as a Software & Cloud Engineer, focusing on mastering Azure technologies to build reliable and robust applications.</p>
        </div>

        <h3 className="mt-8 text-2xl font-bold mb-4">Why I Created This Blog</h3>
        <div className="space-y-4">
          <p>As I focus on cloud technologies during my professional transformation, I want to share my experiences along the way. That's why I decided to document this journey through a blog.</p>
          <p>This blog will grow and evolve as I do. If you have suggestions or topics you'd like to discuss, feel free to reach out to me on LinkedIn!</p>
        </div>

        <a href="https://www.linkedin.com/in/josescap" target="_blank" rel="noopener noreferrer">
          <LinkedIn className="w-8" />
        </a>
      </div>
    </main>
  );
}
