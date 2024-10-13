import Image from "next/image";
import Azure900Badge from "@/assets/azure-900-badge.png";
import Azure204Badge from "@/assets/azure-204-badge.png";
import GithubFoundations from "@/assets/github-foundations-badge.png";
import Azure400Badge from "@/assets/azure-400-badge.png";
import { Metadata } from "next";
import { CERTIFICATIONS } from "@/constants/certifications";
import Title from "@/components/blog/Title";
import Paragraph from "@/components/blog/Paragraph";

export const metadata: Metadata = {
  title: "About | JoseScap's Blog",
  description: "Learn more about JoseScap, a software engineer with 4.5+ years of experience. Discover his journey in software and cloud engineering.",
  keywords: ["JoseScap", "software engineer", "Azure", "cloud engineering", "web development", "APIs", "certifications"],
  authors: [{ name: "Juan José Puente Scapolatempo" }],
  openGraph: {
    title: "About | JoseScap's Blog",
    description: "Learn more about JoseScap and his professional journey.",
    type: "website",
    url: "https://yourwebsite.com/about",
    images: [
      {
        url: "/profile.jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | JoseScap's Blog",
    description: "Discover JoseScap's professional experience and journey in software and cloud engineering.",
    images: ["/profile.jpeg"],
  },
};



export default function About() {
  const calculateExperience = () => {
    const startYear = 2020;
    const startMonth = 0;
    const startDate = new Date(startYear, startMonth);

    const currentDate = new Date();


    const totalMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12
      + (currentDate.getMonth() - startDate.getMonth());


    const totalYears = totalMonths / 12;


    const roundedYears = Math.floor(totalYears * 2) / 2;

    return roundedYears;
  };

  const experience = calculateExperience();

  return (
    <main className="flex-1 md:ml-64 lg:mr-64">
      <div className="p-8">
        <Title>About Me</Title>
        <div className="space-y-4">
          <Paragraph>Hi, I'm Juan José Puente Scapolatempo, also known as JoseScap, a software engineer with over {experience} years of experience in developing applications.</Paragraph>
          <Paragraph>Throughout my career, I've worked on web applications, mobile apps, and APIs across various programming languages and technologies.</Paragraph>
          <Paragraph>Currently, I'm in the process of reinventing my professional profile as a Software & Cloud Engineer, focusing on mastering Azure technologies to build reliable and robust applications.</Paragraph>
        </div>

        <Title level={2} className="mt-8" extendClassName>Why I Created This Blog</Title>
        <div className="space-y-4">
          <Paragraph>As I focus on cloud technologies during my professional transformation, I want to share my experiences along the way. That's why I decided to document this journey through a blog.</Paragraph>
          <Paragraph>This blog will grow and evolve as I do. If you have suggestions or topics you'd like to discuss, feel free to reach out to me on <a className="font-bold hover:font-black text-[#0A66C2] hover:text-white" href="https://www.linkedin.com/in/josescap" target="_blank" rel="noopener noreferrer">LinkedIn!</a></Paragraph>
        </div>

        <Title level={2} className="mt-8" extendClassName>My certifications</Title>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-700 bg-gray-800">
            <thead>
              <tr className="bg-gray-700">
                <th className="border border-gray-600 p-2 text-left text-white">Certification</th>
                <th className="border border-gray-600 p-2 text-center text-white">Badge</th>
                <th className="border border-gray-600 p-2 text-right text-white">Date</th>
              </tr>
            </thead>
            <tbody>
              {
                CERTIFICATIONS.map(({ achieved, badge, date, link, name }) => (
                  <tr className="hover:bg-gray-600">
                    <td className="border border-gray-600 p-2 text-left text-gray-200">
                      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                        {name}
                      </a>
                    </td>
                    <td className="border border-gray-600 p-2 flex justify-center">
                      <Image src={badge} alt="Azure Fundamentals Badge" width={200} height={200} />
                    </td>
                    <td className="border border-gray-600 p-2 text-right text-gray-200">
                      {achieved ? "" : "(Tentative)"} {date}
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
