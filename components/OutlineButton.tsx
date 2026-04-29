"use client";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
}

export function OutlineButton({ href, children, className = "" }: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-sm
        border-2 border-[#524096] text-[#524096] bg-transparent
        hover:gradient-bg hover:text-white hover:border-transparent
        transition-all duration-200
        min-h-[44px] min-w-[44px] ${className}`}
    >
      {children}
    </Link>
  );
}
