import type { Metadata } from "next";
import { GradientText } from "@/components/GradientText";
import { ProductCard } from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Adaptive Accessories | Antami",
  description:
    "MagZipper, ZipperBuddy, and magnetic clothing closures — small tools that make a big difference in everyday independence.",
};

const products = [
  {
    name: "Magnetic Clothing Closures",
    description:
      "Replace standard buttons and snaps with powerful magnetic closures. Ideal for one-handed dressing and individuals with limited fine motor control.",
    callout: "No more fiddly buttons.",
  },
  {
    name: "MagZipper",
    description:
      "A magnetic zipper system that makes zipping up a jacket or bag effortless — even with one hand or limited grip strength.",
    callout: "Zip with one movement.",
  },
  {
    name: "ZipperBuddy",
    description:
      "An adaptive zipper pull aid that gives a larger, easier-to-grip handle to any standard zipper.",
    callout: "Turn any zip into an easy zip.",
  },
];

export default function AccessoriesPage() {
  return (
    <>
      <section className="py-24 bg-[#f9fafa]" aria-labelledby="accessories-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1 h-12 gradient-bg rounded-full" aria-hidden="true" />
            <h1
              id="accessories-heading"
              className="text-4xl sm:text-5xl"
              style={{ fontFamily: "Helony, Georgia, serif" }}
            >
              <GradientText>Accessories</GradientText>
            </h1>
          </div>
          <p className="text-[#5a5a5a] text-lg max-w-xl">
            Small tools, big difference. Our adaptive accessories make everyday dressing more independent.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white" aria-label="Accessory products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.name} className="gradient-border-top bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-[#f0fdf9] to-[#e8eaf6] flex items-center justify-center">
                  <span className="text-[#524096] opacity-30 text-6xl" aria-hidden="true">◈</span>
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <h2 className="font-semibold text-[#2d2d2d]">{p.name}</h2>
                  <div
                    className="text-xs font-semibold px-3 py-1 rounded-full inline-block self-start gradient-bg text-white"
                    aria-label={`What it does: ${p.callout}`}
                  >
                    {p.callout}
                  </div>
                  <p className="text-[#5a5a5a] text-sm leading-relaxed flex-1">{p.description}</p>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-2 rounded-full gradient-bg text-white text-sm font-semibold hover:brightness-110 transition-all min-h-[44px]"
                    aria-label={`Enquire about ${p.name}`}
                  >
                    Enquire
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
