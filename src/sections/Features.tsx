import { FeatureCard } from "@/components/feature-card";
import { Tag } from "@/components/tag";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-owen-garcia.jpg";
import avatar3 from "@/assets/images/avatar-lula-meyers.jpg";
import { Avatar } from "@/components/avatar";
import Image from "next/image";
import { Keys } from "@/components/keys";

const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
];

export default function Features() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Features</Tag>
        </div>
        <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
          Where power meets <span className="text-primary">simplicity</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-3">
          <FeatureCard
            className="md:col-span-2 lg:col-span-1"
            title="Real-time Collaboration"
            description="Work together seamlessly with conflict-free team editing"
          >
            <div className="aspect-video flex items-center justify-center">
              <Avatar className="z-30">
                <Image src={avatar1} alt="avatar 1" className="rounded-full" />
              </Avatar>
              <Avatar className="z-20 -ml-6 border-indigo-500">
                <Image src={avatar2} alt="avatar 2" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-amber-500 z-10">
                <Image src={avatar3} alt="avatar 3" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-transparent">
                <div className="size-full bg-neutral-700 rounded-full inline-flex justify-center items-center gap-1">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span
                      key={i}
                      className="size-1.5 rounded-full bg-white"
                    ></span>
                  ))}
                </div>
              </Avatar>
            </div>
          </FeatureCard>
          <FeatureCard
            className="md:col-span-2 lg:col-span-1"
            title="Interactive Prototyping"
            description="Engage your clients with prototypes that react to user actions
"
          >
            <div className="aspect-video flex items-center justify-center">
              <p className="text-4xl font-black text-accent/20 text-center">
                We&apos;ve achieved{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  incredible
                </span>{" "}
                growth this year
              </p>
            </div>
          </FeatureCard>
          <FeatureCard
            className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto"
            title="Keyboard Quick Actions"
            description="Powerful commands to help your create design more quickly"
          >
            <div className="aspect-video flex justify-center items-center gap-4">
              <Keys className="w-28">shift</Keys>
              <Keys>alt</Keys>
              <Keys>C</Keys>
            </div>
          </FeatureCard>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {features.map((features, index) => (
            <div
              key={index}
              className="bg-neutral-900 border border-white/10 inline-flex px-3 py-1.5 rounded-2xl gap-3 items-center md:px-5 md:py-2"
            >
              <span className="bg-primary text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl">
                &#10038;
              </span>
              <span className="font-medium md:text-lg">{features}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
