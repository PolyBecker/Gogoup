import type { AnchorHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "yellow" | "blue" | "green" | "orange" | "primary";

const variants: Record<ButtonVariant, string> = {
  yellow: "bg-yellow text-[#2d2f52] shadow-[0_3px_0_#20254f]",
  blue: "bg-[#a9bbff] text-[#1d255d] shadow-[0_3px_0_#20254f]",
  green: "bg-green text-white",
  orange: "bg-[#f36a43] text-white",
  primary: "bg-[#0068c9] text-white",
};

export function ButtonLink({
  children,
  className,
  variant = "yellow",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
}) {
  return (
    <a
      className={clsx(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-extrabold tracking-wide transition duration-200 hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
