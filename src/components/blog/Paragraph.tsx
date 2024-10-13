import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
  extendClassName?: boolean;
}

const BASE_CLASSNAME = "text-gray-200";

export default function Paragraph({ children, className, extendClassName = false }: Props) {
  const appliedClassName = extendClassName
    ? `${BASE_CLASSNAME} ${className || ''}`
    : className || BASE_CLASSNAME;

  return <p className={appliedClassName}>{children}</p>;
}
