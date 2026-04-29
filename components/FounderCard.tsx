import Image from "next/image";

interface Props {
  name: string;
  bio: string;
  image?: string;
}

export function FounderCard({ name, bio, image }: Props) {
  return (
    <article className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center text-center gap-4">
      <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-[#01efac] to-[#5f2a84] flex items-center justify-center">
        {image ? (
          <Image src={image} alt={`Photo of ${name}`} fill className="object-cover" />
        ) : (
          <span className="text-white text-4xl font-display" aria-hidden="true">
            {name.charAt(0)}
          </span>
        )}
      </div>
      <div>
        <h3 className="font-semibold text-lg text-[#2d2d2d]">{name}</h3>
        <p className="text-[#5a5a5a] text-sm leading-relaxed mt-2">{bio}</p>
      </div>
    </article>
  );
}
