import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import { Archive, Home, Info, Layers, Search, Tag, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Azure204Badge from "@/assets/azure-204-badge.png";
import profile from "@/assets/profile.jpeg"
import TRENDING_TAGS from "@/constants/trending-tags";
import Head from "next/head";
import Link from "next/link";
import APP_PAGES from "@/constants/app-pages";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Your Page Title",
  description: "Your Page Description"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen bg-gray-900 text-gray-100">
          <aside className="w-64 bg-gray-800 p-6 hidden md:block fixed left-0 top-0 h-full">
            <div className="mb-8">
              <Image
                src={profile}
                alt="Profile"
                className="rounded-full mx-auto"
              />
              <h1 className="text-xl font-bold text-center mt-4">Programming With JoseScap</h1>
              <p className="text-sm text-center text-gray-400">Onwards and Upwards! 🚀</p>
            </div>
            <nav>
              <ul className="space-y-2">
                {APP_PAGES.map(({ Icon, href, text }, idx) => (
                  <li key={idx}>
                    <Link href={href}>
                      <Button variant="ghost" className="w-full justify-start">
                        <Icon />{text}
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-8">
              <Image
                src={Azure204Badge}
                alt="Certification"
                className="mx-auto max-w-[90%]"
              />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 md:ml-24 lg:mr-24">
            {children}
          </main>

          <aside className="w-64 bg-gray-800 p-6 hidden lg:block fixed right-0 top-0 h-full">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Search</h3>
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-10 bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                />
              </div>
            </div>
            <Separator className="my-4" />
            <div>
              <h3 className="text-xl font-bold mb-4">Trending Tags</h3>
              <div className="flex flex-wrap gap-2">
                {TRENDING_TAGS.map((tag) => (
                  <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-gray-600">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </body>
    </html>
  );
}
