import { Tag } from "@/components/tag";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

export default function Introduction() {
  return (
    <section className="py-28 lg:py-40">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Introducing Layers</Tag>
        </div>
        <div className="text-4xl md:text-6xl lg:text-7xl font-medium text-center mt-10">
          <span>Your creative process deserves better.</span>{" "}
          <span className="text-accent/15">{text}</span>
          <span className="text-primary block">
            That&apos;s why we built Layers.
          </span>
        </div>
      </div>
    </section>
  );
}
