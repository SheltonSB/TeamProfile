import { Sparkles } from "lucide-react";

type LogoProps = {
  inverted?: boolean;
};

export function Logo({ inverted = false }: LogoProps) {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label="Conditia AI home">
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-md ${
          inverted ? "bg-white text-navy-900" : "bg-navy-900 text-white"
        }`}
      >
        <Sparkles className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`text-lg font-bold tracking-normal ${inverted ? "text-white" : "text-navy-950"}`}>
          Conditia <span className={inverted ? "text-orange-400" : "text-orange-500"}>AI</span>
        </span>
        <span className={`text-xs font-semibold uppercase tracking-[0.22em] ${inverted ? "text-white/70" : "text-navy-700"}`}>
          Omaha, Nebraska
        </span>
      </span>
    </a>
  );
}
