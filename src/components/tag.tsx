"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export const Tag = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "inline-flex border border-primary gap-2 text-primary px-3 py-1 rounded-full uppercase items-center",
        props.className,
      )}
      {...props}
    >
      <span>&#10038;</span>
      <span className="text-sm">{props.children}</span>
    </div>
  );
};
