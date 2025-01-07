"use-client";

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export const Avatar = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, children, ...otherProps } = props;
  return (
    <div
      className={cn(
        "size-20 rounded-full overflow-hidden border-4 border-blue-500 p-1 bg-neutral-900",
        className,
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
};
