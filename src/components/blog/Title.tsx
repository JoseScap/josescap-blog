import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
  extendClassName?: boolean;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const BASE_CLASSNAME: Record<number, string> = {
  1: "text-3xl font-bold mb-6 text-white",
  2: "text-2xl font-semibold mb-4 text-white",
  3: "text-xl font-semibold mb-3 text-gray-300",
  4: "text-lg font-medium mb-2 text-gray-300",
  5: "text-base font-medium mb-1 text-gray-400",
  6: "text-sm font-normal text-gray-400",
};

export default function Title({ children, className, extendClassName = false, level = 1 }: Props) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const appliedClassName = extendClassName
    ? `${BASE_CLASSNAME[level]} ${className || ''}`
    : className || BASE_CLASSNAME[level];

  return <Tag className={appliedClassName}>{children}</Tag>;
}
