import { ReactNode } from "react";

interface Props {
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  children: ReactNode;
  className?: string;
}

export function GradientText({ as: Tag = "span", children, className = "" }: Props) {
  return (
    <Tag className={`gradient-text font-display ${className}`}>
      {children}
    </Tag>
  );
}
