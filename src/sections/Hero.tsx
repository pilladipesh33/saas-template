import { Button } from "@/components/ui/button";
import { HeroConstant } from "@/utils/constant";

import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import { Pointer } from "@/components/pointer";

export default function Hero() {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container relative">
        <div className="hidden lg:block">
          <Image
            src={designExample1Image}
            alt="design example 1 image"
            className="absolute -left-32 top-16"
          />
          <Image
            src={designExample2Image}
            alt="design example 2 image"
            className="absolute -right-64 -top-16"
          />
          <div className="absolute left-56 top-96">
            <Pointer name="Andrea" />
          </div>
          <div className="absolute right-80 top-4">
            <Pointer name="Brain" color="red" />
          </div>
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
