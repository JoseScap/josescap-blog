import { StaticImageData } from "next/image"
import Azure900Badge from "@/assets/azure-900-badge.png";
import Azure204Badge from "@/assets/azure-204-badge.png";
import GithubFoundationsBadge from "@/assets/github-foundations-badge.png";
import Azure400Badge from "@/assets/azure-400-badge.png";

type Certification = {
  name: string
  link: string
  badge: StaticImageData
  date: string
  achieved: boolean
}

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Microsoft Certified: Azure Fundamentals",
    link: "https://learn.microsoft.com/en-us/users/josescap/credentials/b8bc64a2c86ffbe3",
    badge: Azure900Badge,
    date: "August 26, 2023",
    achieved: true
  },
  {
    name: "Microsoft Certified: Azure Developer Associate",
    link: "https://learn.microsoft.com/en-us/users/josescap/credentials/923a36066b895ad6",
    badge: Azure204Badge,
    date: "September 30, 2024",
    achieved: true
  },
  {
    name: "GitHub Foundations",
    link: "https://assets.ctfassets.net/wfutmusr1t3h/1kmMx7AwI4qH8yIZgOmQlP/79e6ff1dfdee589d84a24dd763b1eef7/github-foundations-exam-study-guide__1_.pdf",
    badge: GithubFoundationsBadge,
    date: "November 15, 2024",
    achieved: false
  },
  {
    name: "Microsoft Certified: DevOps Engineer Expert",
    link: "https://learn.microsoft.com/es-es/credentials/certifications/devops-engineer/",
    badge: Azure400Badge,
    date: "March 15, 2025",
    achieved: false
  },
]