import Image from "next/image";
import Azure900Badge from "@/assets/azure-900-badge.png";
import Azure204Badge from "@/assets/azure-204-badge.png";
import GithubFoundations from "@/assets/github-foundations-badge.png";
import Azure400Badge from "@/assets/azure-400-badge.png";
import Head from "next/head";

export default function About() {
  return (
    <main className="flex-1 md:ml-64 lg:mr-64">
      <Head>
        {/* Meta tags for SEO */}
        <title>About Me | Juan José Puente Scapolatempo - Software & Cloud Engineer</title>
        <meta name="description" content="Learn more about Juan José Puente Scapolatempo, a software and cloud engineer with over 4.5 years of experience. Discover his journey, certifications, and why he created this blog." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourwebsite.com/about" />
        <meta property="og:title" content="About Me | Juan José Puente Scapolatempo - Software & Cloud Engineer" />
        <meta property="og:description" content="Discover the journey of Juan José Puente Scapolatempo as he transitions to a Software & Cloud Engineer, with a focus on Azure technologies." />
        <meta property="og:url" content="https://yourwebsite.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yourwebsite.com/assets/profile-pic.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Me | Juan José Puente Scapolatempo - Software & Cloud Engineer" />
        <meta name="twitter:description" content="Learn more about Juan José Puente Scapolatempo, his experience in software and cloud engineering, and his certifications." />
        <meta name="twitter:image" content="https://yourwebsite.com/assets/profile-pic.jpg" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6 text-white">About Me</h1>
        <div className="space-y-4">
          <p className="text-gray-200">Hi, I'm Juan José Puente Scapolatempo, also known as JoseScap, a software engineer with over 4.5 years of experience in developing applications.</p>
          <p className="text-gray-200">Throughout my career, I've worked on web applications, mobile apps, and APIs across various programming languages and technologies.</p>
          <p className="text-gray-200">Currently, I'm in the process of reinventing my professional profile as a Software & Cloud Engineer, focusing on mastering Azure technologies to build reliable and robust applications.</p>
        </div>

        <h2 className="mt-8 text-2xl font-bold mb-4 text-white">Why I Created This Blog</h2>
        <div className="space-y-4">
          <p className="text-gray-200">As I focus on cloud technologies during my professional transformation, I want to share my experiences along the way. That's why I decided to document this journey through a blog.</p>
          <p className="text-gray-200">This blog will grow and evolve as I do. If you have suggestions or topics you'd like to discuss, feel free to reach out to me on <a className="font-bold hover:font-black text-[#0A66C2] hover:text-white" href="https://www.linkedin.com/in/josescap" target="_blank" rel="noopener noreferrer">LinkedIn!</a></p>
        </div>

        <h2 className="mt-8 text-2xl font-bold mb-4 text-white">My Certifications</h2>
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
              <tr className="hover:bg-gray-600">
                <td className="border border-gray-600 p-2 text-left text-gray-200">
                  <a href="https://learn.microsoft.com/api/credentials/share/en-us/josescap/B8BC64A2C86FFBE3?sharingId=C7C86D285CB602EE" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    Microsoft Certified: Azure Fundamentals
                  </a>
                </td>
                <td className="border border-gray-600 p-2 flex justify-center">
                  <Image src={Azure900Badge} alt="Azure Fundamentals Badge" width={200} height={200} />
                </td>
                <td className="border border-gray-600 p-2 text-right text-gray-200">August 26, 2023</td>
              </tr>
              <tr className="hover:bg-gray-600">
                <td className="border border-gray-600 p-2 text-left text-gray-200">
                  <a href="https://learn.microsoft.com/api/credentials/share/en-us/josescap/923A36066B895AD6?sharingId=C7C86D285CB602EE" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    Microsoft Certified: Azure Developer Associate
                  </a>
                </td>
                <td className="border border-gray-600 p-2 flex justify-center">
                  <Image src={Azure204Badge} alt="Azure Developer Associate Badge" width={200} height={200} />
                </td>
                <td className="border border-gray-600 p-2 text-right text-gray-200">September 30, 2024</td>
              </tr>
              <tr className="hover:bg-gray-600">
                <td className="border border-gray-600 p-2 text-left text-gray-200">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    GitHub Foundations
                  </a>
                </td>
                <td className="border border-gray-600 p-2 flex justify-center">
                  <Image src={GithubFoundations} alt="GitHub Foundations Badge" width={200} height={200} />
                </td>
                <td className="border border-gray-600 p-2 text-right text-gray-200">November 15, 2023</td>
              </tr>
              <tr className="hover:bg-gray-600">
                <td className="border border-gray-600 p-2 text-left text-gray-200">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    Microsoft Certified: DevOps Engineer Expert
                  </a>
                </td>
                <td className="border border-gray-600 p-2 flex justify-center">
                  <Image src={Azure400Badge} alt="DevOps Engineer Expert Badge" width={200} height={200} />
                </td>
                <td className="border border-gray-600 p-2 text-right text-gray-200">March 15, 2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
