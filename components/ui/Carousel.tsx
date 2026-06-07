"use client";

import { ReactNode, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

export function Carousel({
  children,
  label,
  itemClassName,
  controlsClassName,
  controlsLayout = "overlay",
}: {
  children: ReactNode[];
  label: string;
  itemClassName?: string;
  controlsClassName?: string;
  controlsLayout?: "overlay" | "below";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const controlsBelow = controlsLayout === "below";

  function scroll(direction: "prev" | "next") {
    const node = ref.current;
    if (!node) return;
    node.scrollBy({
      left: direction === "next" ? node.clientWidth * 0.82 : -node.clientWidth * 0.82,
      behavior: "smooth",
    });
  }

  return (
    <div className="relative">
      <div
        ref={ref}
        aria-label={label}
        className="scrollbar-none flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4"
        role="region"
        tabIndex={0}
      >
        {children.map((child, index) => (
          <div
            className={clsx("min-w-[84%] snap-start sm:min-w-[48%] lg:min-w-[31%]", itemClassName)}
            key={index}
          >
            {child}
          </div>
        ))}
      </div>
      <div
        className={clsx(
          controlsBelow
            ? "mt-4 flex items-center justify-center gap-4"
            : "pointer-events-none absolute inset-y-0 left-0 right-0 items-center justify-between",
          controlsClassName ?? "hidden md:flex",
        )}
      >
        <button
          aria-label={`Voltar ${label}`}
          className={clsx(
            "pointer-events-auto grid place-items-center rounded-full border shadow-xl backdrop-blur transition",
            controlsBelow
              ? "size-12 border-primary bg-primary text-white hover:bg-primary-dark"
              : "ml-2 size-14 border-primary bg-primary text-white hover:bg-primary-dark md:-ml-5 md:size-12 md:border-white/80 md:bg-white/70 md:text-primary md:hover:bg-white",
          )}
          onClick={() => scroll("prev")}
          type="button"
        >
          <ChevronLeft aria-hidden className="size-7" />
        </button>
        <button
          aria-label={`Avançar ${label}`}
          className={clsx(
            "pointer-events-auto grid place-items-center rounded-full border shadow-xl backdrop-blur transition",
            controlsBelow
              ? "size-12 border-primary bg-primary text-white hover:bg-primary-dark"
              : "mr-2 size-14 border-primary bg-primary text-white hover:bg-primary-dark md:-mr-5 md:size-12 md:border-white/80 md:bg-white/70 md:text-primary md:hover:bg-white",
          )}
          onClick={() => scroll("next")}
          type="button"
        >
          <ChevronRight aria-hidden className="size-7" />
        </button>
      </div>
    </div>
  );
}
