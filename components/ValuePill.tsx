const colors = [
  { bg: "#01efac", text: "#1a1a2e" },
  { bg: "#01cbae", text: "#1a1a2e" },
  { bg: "#2082a6", text: "#ffffff" },
  { bg: "#524096", text: "#ffffff" },
  { bg: "#5f2a84", text: "#ffffff" },
];

interface Props {
  value: string;
  index: number;
}

export function ValuePill({ value, index }: Props) {
  const color = colors[index % colors.length];
  return (
    <span
      className="inline-flex items-center justify-center px-6 py-2 rounded-full font-semibold text-sm whitespace-nowrap"
      style={{ backgroundColor: color.bg, color: color.text }}
    >
      {value}
    </span>
  );
}
