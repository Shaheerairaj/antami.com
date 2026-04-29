import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export function SectionBanner({ children, className = "" }: Props) {
  return (
    <section className={`bg-[#1a1a2e] py-20 px-4 text-center ${className}`}>
      <div className="max-w-3xl mx-auto">
        {children}
      </div>
    </section>
  );
}
