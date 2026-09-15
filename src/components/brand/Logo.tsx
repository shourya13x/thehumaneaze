import Link from "next/link";
import { LogoMark } from "./LogoMark";
import { cn } from "@/lib/utils";

export const BRAND_NAME = "The humanEaze";
export const BRAND_TAGLINE = "Making your path easier";

type LogoProps = {
  href?: string | null;
  variant?: "icon" | "horizontal" | "stacked";
  showTagline?: boolean;
  inverted?: boolean;
  className?: string;
  markClassName?: string;
};

function Wordmark({
  inverted,
  stacked,
  showTagline,
}: {
  inverted?: boolean;
  stacked?: boolean;
  showTagline?: boolean;
}) {
  return (
    <span className={cn("flex min-w-0 flex-col", stacked ? "items-center text-center" : "items-start")}>
      <span
        className={cn(
          "font-heading text-[1.05rem] font-semibold leading-none tracking-tight md:text-lg",
          stacked && "text-2xl md:text-3xl"
        )}
      >
        <span className={inverted ? "text-white" : "text-navy"}>The human</span>
        <span className="text-teal">Eaze</span>
      </span>
      {showTagline ? (
        <span
          className={cn(
            "mt-1.5 font-sans text-[0.55rem] font-medium uppercase tracking-[0.16em]",
            inverted ? "text-white/70" : "text-navy",
            stacked && "mt-2 text-[0.65rem] tracking-[0.2em]"
          )}
        >
          Making your path easier
        </span>
      ) : null}
    </span>
  );
}

export function Logo({
  href = "/",
  variant = "horizontal",
  showTagline = false,
  inverted = false,
  className,
  markClassName,
}: LogoProps) {
  const mark = (
    <LogoMark
      className={cn(
        "text-teal",
        variant === "stacked" ? "h-16 w-16 md:h-20 md:w-20" : "h-9 w-9",
        variant === "icon" && "h-8 w-8",
        markClassName
      )}
    />
  );

  const content =
    variant === "icon" ? (
      mark
    ) : variant === "stacked" ? (
      <span className="flex flex-col items-center gap-4">
        {mark}
        <Wordmark inverted={inverted} stacked showTagline={showTagline} />
      </span>
    ) : (
      <span className="flex items-center gap-2.5">
        {mark}
        <Wordmark inverted={inverted} showTagline={showTagline} />
      </span>
    );

  if (!href) {
    return <span className={cn("inline-flex", className)}>{content}</span>;
  }

  return (
    <Link
      href={href}
      className={cn("inline-flex items-center", className)}
      aria-label={`${BRAND_NAME} — ${BRAND_TAGLINE}`}
    >
      {content}
    </Link>
  );
}
