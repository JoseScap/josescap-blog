import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
  extendClassName?: boolean;
}

const BASE_CLASSNAME = "space-y-4";

export default function Box({ children, className, extendClassName = false }: Props) {
  const appliedClassName = extendClassName
    ? `${BASE_CLASSNAME} ${className || ''}`
    : className || BASE_CLASSNAME;

  return <div className={appliedClassName}>{children}</div>;
}
