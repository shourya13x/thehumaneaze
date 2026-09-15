import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
  title?: string;
};

/**
 * Geometric "H" mark from The humanEaze brand system:
 * two stacked panes on the left, a full-height pane with a circular
 * window on the right — a path made easier.
 */
export function LogoMark({ className, title }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className={cn("shrink-0", className)}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      {/* Left column — two stacked panes */}
      <rect x="0" y="0" width="43" height="43" />
      <rect x="0" y="57" width="43" height="43" />
      {/* Right column — pane with circular window */}
      <path
        fillRule="evenodd"
        d="M57 0h43v100H57V0Zm21.5 66.5a16.5 16.5 0 1 0 0-33 16.5 16.5 0 1 0 0 33Z"
      />
    </svg>
  );
}
