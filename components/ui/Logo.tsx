import clsx from "clsx";
import Image from "next/image";
import { siteImages } from "@/lib/site-assets";

export function Logo({
  className,
  variant = "header",
}: {
  className?: string;
  variant?: "header" | "footer";
}) {
  return (
    <Image
      alt="Gogoup"
      className={clsx("h-auto w-28 sm:w-32", className)}
      height={variant === "footer" ? 59 : 54}
      priority={variant === "header"}
      src={variant === "footer" ? siteImages.logoFooter : siteImages.logo}
      unoptimized
      width={variant === "footer" ? 216 : 225}
    />
  );
}
