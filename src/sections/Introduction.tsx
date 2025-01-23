"use client";
import { useScroll, useTransform } from "motion/react";
import { Tag } from "@/components/tag";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(" ");

export default function Introduction() {
	const scrollTargetRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: scrollTargetRef,
		offset: ["start end", "end end"],
	});
	const [currentWord, setCurrentWord] = useState(0);
	const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

	useEffect(() => {
		wordIndex.on("change", (latest) => {
			setCurrentWord(latest);
		});
	}, [wordIndex]);

	return (
		<section className="py-28 lg:py-40">
			<div className="container">
				<div className="sticky top-20 md:top-28 lg:top-40">
					<div className="flex justify-center">
						<Tag>Introducing Layers</Tag>
					</div>
					<div className="text-4xl md:text-6xl lg:text-7xl font-medium text-center mt-10">
						<span>Your creative process deserves better.</span>{" "}
						<span className="">
							{words.map((word, index) => (
								<span
									key={index}
									className={cn(
										"transition duration-500 text-accent/15",
										index < currentWord && "text-white"
									)}
								>{`${word} `}</span>
							))}
						</span>
						<span className="text-primary block">
							That&apos;s why we built Layers.
						</span>
					</div>
				</div>
				<div className="h-[100vh]" ref={scrollTargetRef}></div>
			</div>
		</section>
	);
}
