"use client";

import { Button } from "@/components/ui/button";
import { HeroConstant } from "@/utils/constant";

import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import { Pointer } from "@/components/pointer";
import { useAnimate, motion } from "motion/react";
import { useEffect } from "react";
import cursorYouImage from "@/assets/images/cursor-you.svg";

export default function Hero() {
	const [leftDesignScope, leftDesignAnimate] = useAnimate();
	const [leftPointerScope, leftPointerAnimate] = useAnimate();
	const [rightDesignScope, rightDesignAnimate] = useAnimate();
	const [rightPointerScope, rightPointerAnimate] = useAnimate();

	useEffect(() => {
		leftDesignAnimate([
			[leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
			[leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
		]);

		leftPointerAnimate([
			[leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
			[leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
			[
				leftPointerScope.current,
				{ x: 0, y: [0, 16, 0] },
				{ duration: 0.5, ease: "easeInOut" },
			],
		]);

		rightDesignAnimate([
			[rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
			[rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
		]);

		rightPointerAnimate([
			[
				rightPointerScope.current,
				{ opacity: 1 },
				{ duration: 0.5, delay: 1.5 },
			],
			[rightPointerScope.current, { y: 0, x: 200 }, { duration: 0.5 }],
			[
				rightPointerScope.current,
				{ x: 0, y: [0, 20, 0] },
				{ duration: 0.5, ease: "easeInOut" },
			],
		]);
	}, []);

	return (
		<section
			className="py-24 overflow-x-clip"
			style={{ cursor: `url(${cursorYouImage.src}), auto` }}
		>
			<div className="container relative">
				<div className="hidden lg:block">
					<motion.div
						ref={leftDesignScope}
						initial={{ opacity: 0, y: 100, x: -100 }}
						drag
						className="absolute -left-32 top-16"
					>
						<Image
							src={designExample1Image}
							alt="design example 1 image"
							draggable={false}
						/>
					</motion.div>
					<motion.div
						className="absolute -right-64 -top-16"
						ref={rightDesignScope}
						initial={{ opacity: 0, y: 100, x: 200 }}
						drag
					>
						<Image
							draggable={false}
							src={designExample2Image}
							alt="design example 2 image"
						/>
					</motion.div>
					<motion.div
						ref={leftPointerScope}
						initial={{ opacity: 0, y: 100, x: -200 }}
						className="absolute left-56 top-96"
					>
						<Pointer name="Andrea" />
					</motion.div>
					<motion.div
						ref={rightPointerScope}
						className="absolute right-80 top-4"
						initial={{ opacity: 0, y: 100, x: 400 }}
					>
						<Pointer name="Brain" color="red" />
					</motion.div>
				</div>
				<div className="flex justify-center">
					<div className="inline-flex py-1 px-3 bg-gradient-to-r from-primary to-pink-500 rounded-full text-accent font-semibold">
						{HeroConstant.BADGE}
					</div>
				</div>
				<h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
					{HeroConstant.TITLE}
				</h1>
				<p className="text-center text-xl text-accent/50 mt-8 max-w-2xl mx-auto">
					{HeroConstant.SUB}
				</p>
				<form className="flex border border-accent/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
					<input
						type="email"
						placeholder="Enter your email"
						className="bg-transparent px-4 md:flex-1"
					/>
					<Button
						size={"sm"}
						type="submit"
						className="whitespace-nowrap rounded-full"
					>
						Sign Up
					</Button>
				</form>
			</div>
		</section>
	);
}
