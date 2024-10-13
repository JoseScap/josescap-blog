import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string
}

const BASE_CLASSNAME = "text-3xl font-bold mb-6 text-white"

export default function TitleOne({ children, className }: Props) {
  return <h1 className={className ?? BASE_CLASSNAME}>{children}</h1>
}