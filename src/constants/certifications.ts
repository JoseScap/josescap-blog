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
    name: "Microsoft Certified: DevOps Engineer Expert",
    link: "https://learn.microsoft.com/es-es/credentials/certifications/devops-engineer/",
    badge: Azure400Badge,
    date: "November 30, 2025",
    achieved: false
  },
]