import Image from "next/image";
import logoImage from "../assets/images/logo.svg";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  return (
    <section className="py-4 lg:py-8">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full p-2 items-center px-4 md:pr-2">
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
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
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
      </div>
    </section>
  );
}
