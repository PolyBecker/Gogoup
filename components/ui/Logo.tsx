import clsx from "clsx";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={clsx("inline-flex items-center gap-2 text-sm font-black tracking-tight", className)}>
      <span className="relative grid size-9 place-items-center rounded-full bg-white text-primary-dark">
        <span className="absolute left-1 top-2 size-4 rounded-full bg-yellow" />
        <span className="absolute bottom-1.5 right-1.5 size-3 rounded-full bg-yellow" />
        <span className="relative z-10 text-2xl leading-none">‹</span>
      </span>
      <span>gogoup</span>
    </span>
  );
}
