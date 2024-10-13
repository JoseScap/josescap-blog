import { Home, Info, Layers, Tag, Video } from "lucide-react"

type AppPage = {
  href: string
  text: string
  Icon: () => JSX.Element
}

export const APP_PAGES: AppPage[] = [
  { text: "Home", href: "/", Icon: () => <Home className="mr-2 h-4 w-4" /> },
  { text: "About", href: "/about", Icon: () => <Info className="mr-2 h-4 w-4" /> },
  { text: "Categories", href: "/categories", Icon: () => <Layers className="mr-2 h-4 w-4" /> },
  { text: "Tags", href: "/tags", Icon: () => <Tag className="mr-2 h-4 w-4" /> },
  { text: "Videos", href: "/videos", Icon: () => <Video className="mr-2 h-4 w-4" /> },
]

export default APP_PAGES;