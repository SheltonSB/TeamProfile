type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const titleColor = tone === "light" ? "text-navy-950" : "text-white";
  const descriptionColor = tone === "light" ? "text-slate-600" : "text-slate-200";

  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-orange-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-3xl font-semibold tracking-normal sm:text-4xl lg:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-base leading-7 sm:text-lg ${descriptionColor}`}>{description}</p>
      ) : null}
    </div>
  );
}
