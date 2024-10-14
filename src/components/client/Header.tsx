"use client";

import { useState } from "react";
import { Menu } from "lucide-react";  // Importar el ícono de hamburguesa
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { APP_PAGES } from "@/constants/app-pages";
import Link from "next/link";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-gray-800 text-gray-100 flex items-center justify-between">
      <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
        <Menu className="w-6 h-6" />
      </Button>

      <h1 className="text-lg font-bold">Programming With JoseScap</h1>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="left">
          <nav>
            <ul className="space-y-2">
              {APP_PAGES.map(({ Icon, href, text }, idx) => (
                <li key={idx}>
                  <Link href={href}>
                    <Button variant="ghost" className="w-full justify-start">
                      <Icon />
                      {text}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
