"use client";

import { ReactNode, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

export function Carousel({
  children,
  label,
  itemClassName,
  controlsClassName,
}: {
  children: ReactNode[];
  label: string;
  itemClassName?: string;
  controlsClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

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
          "pointer-events-none absolute inset-y-0 left-0 right-0 hidden items-center justify-between md:flex",
          controlsClassName,
        )}
      >
        <button
          aria-label={`Voltar ${label}`}
          className="pointer-events-auto -ml-5 grid size-12 place-items-center rounded-full border border-white/80 bg-white/70 text-primary shadow-lg backdrop-blur transition hover:bg-white"
          onClick={() => scroll("prev")}
          type="button"
        >
          <ChevronLeft aria-hidden className="size-7" />
        </button>
        <button
          aria-label={`Avançar ${label}`}
          className="pointer-events-auto -mr-5 grid size-12 place-items-center rounded-full border border-white/80 bg-white/70 text-primary shadow-lg backdrop-blur transition hover:bg-white"
          onClick={() => scroll("next")}
          type="button"
        >
          <ChevronRight aria-hidden className="size-7" />
        </button>
      </div>
    </div>
  );
}
