"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export const Keys = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, children, ...otherProps } = props;
  return (
    <div
      className={cn(
        "bg-neutral-300 inline-flex justify-center items-center rounded-2xl text-neutral-950 text-xl font-medium size-14",
        className,
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
};
