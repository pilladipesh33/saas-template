"use client";

import Image from "next/image";
import logoImage from "../assets/images/logo.svg";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="fixed w-full top-0 py-4 lg:py-8 z-50">
        <div className="container max-w-5xl">
          <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
            <div className="grid grid-cols-2 lg:grid-cols-3 p-2 items-center px-4 md:pr-2">
              <div className="">
                <Image src={logoImage} alt="Logo-svg" className="h-9 w-auto" />
              </div>
              <div className="lg:flex gap-x-6 justify-center items-center hidden">
                {navLinks.map((item, index) => (
                  <div key={index}>
                    <a href={item.href}>{item.label}</a>
                  </div>
                ))}
              </div>
              <div className="flex justify-end space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-menu md:hidden block"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <line
                    x1="3"
                    y1="6"
                    x2="21"
                    y2="6"
                    className={cn(
                      "origin-left transition",
                      isOpen && "rotate-45 -translate-y-1",
                    )}
                  ></line>
                  <line
                    x1="3"
                    y1="12"
                    x2="21"
                    y2="12"
                    className={cn("transition", isOpen && "opacity-0")}
                  ></line>
                  <line
                    x1="3"
                    y1="18"
                    x2="21"
                    y2="18"
                    className={cn(
                      "origin-left transition",
                      isOpen && "-rotate-45 translate-y-1",
                    )}
                  ></line>
                </svg>
                <Button
                  variant={"outline"}
                  className="hidden md:inline-flex font-medium bg-foreground rounded-full"
                >
                  Log In
                </Button>
                <Button className="bg-primary text-secondary rounded-full font-medium hidden md:inline-flex">
                  Sign Up
                </Button>
              </div>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{
                    height: "auto",
                    transition: {
                      type: "tween",
                      stiffness: 200,
                      damping: 10,
                    },
                  }}
                  exit={{ height: 0, filter: "blur(10px)" }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col items-center transition gap-4 py-4 ">
                    {navLinks.map((link, index) => (
                      <a key={index} href={link.href} className=" py-2">
                        {link.label}
                      </a>
                    ))}
                    <Button variant={"outline"} className="bg-transparent">
                      Log In
                    </Button>
                    <Button>Sign Up</Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <div className="pb-[86px] md:pb-[98px] lg:pb-[103px]"></div>
    </>
  );
}
