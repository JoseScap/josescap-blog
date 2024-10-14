import Image from "next/image";
import { Metadata } from "next";
import { CERTIFICATIONS } from "@/constants/certifications";
import Title from "@/components/blog/Title";
import Paragraph from "@/components/blog/Paragraph";
import Box from "@/components/blog/Box";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
        <Box className="space-y-4">
          <Paragraph>Hi, I'm Juan José Puente Scapolatempo, also known as JoseScap, a software engineer with over {experience} years of experience in developing applications.</Paragraph>
          <Paragraph>Throughout my career, I've worked on web applications, mobile apps, and APIs across various programming languages and technologies.</Paragraph>
          <Paragraph>Currently, I'm in the process of reinventing my professional profile as a Software & Cloud Engineer, focusing on mastering Azure technologies to build reliable and robust applications.</Paragraph>
        </Box>

        <Title level={2} className="mt-8" extendClassName>Why I Created This Blog</Title>
        <Box className="space-y-4">
          <Paragraph>As I focus on cloud technologies during my professional transformation, I want to share my experiences along the way. That's why I decided to document this journey through a blog.</Paragraph>
          <Paragraph>This blog will grow and evolve as I do. If you have suggestions or topics you'd like to discuss, feel free to reach out to me on <a className="font-bold hover:font-black text-[#0A66C2] hover:text-white" href="https://www.linkedin.com/in/josescap" target="_blank" rel="noopener noreferrer">LinkedIn!</a></Paragraph>
        </Box>

        <Title level={2} className="mt-8" extendClassName>My certifications</Title>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-white font-bold">Certification</TableHead>
                <TableHead className="text-white font-bold text-center">Badge</TableHead>
                <TableHead className="text-white font-bold text-right">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                CERTIFICATIONS.map(({ achieved, badge, date, link, name }) => (
                  <TableRow>
                    <TableCell className="text-cyan-400 font-bold">
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        {name}
                      </a>
                    </TableCell>
                    <TableCell className="flex justify-center">
                      <Image src={badge} alt="Azure Fundamentals Badge" width={200} height={200} />
                    </TableCell>
                    <TableCell className="text-white font-bold text-right">
                      {achieved ? "" : "(Tentative)"} {date}
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}
