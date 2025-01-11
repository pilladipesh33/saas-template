"use client";

import { cn } from "@/lib/utils";

type FeatureCardProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
};

export const FeatureCard = (props: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "bg-neutral-900 border border-accent/10 p-6 rounded-3xl",
        props.className,
      )}
    >
      <div className="aspect-video">{props.children}</div>
      <div>
        <h3 className="text-3xl font-medium mt-6">{props.title}</h3>
        <p className="text-accent/50 mt-2">{props.description}</p>
      </div>
      <div></div>
    </div>
  );
};
