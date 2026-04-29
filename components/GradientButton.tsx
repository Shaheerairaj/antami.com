"use client";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
}

export function GradientButton({ href, children, className = "" }: Props) {
  return (
    <Link
      href={href}
      className={`inline-block px-8 py-3 rounded-full text-white font-semibold text-sm gradient-bg
        hover:brightness-110 hover:scale-[1.02] transition-all duration-200
        focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-purple
        min-h-[44px] min-w-[44px] flex items-center justify-center ${className}`}
    >
      {children}
    </Link>
  );
}
