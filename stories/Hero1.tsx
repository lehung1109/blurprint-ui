import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero1Props {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
    className?: string;
  };
  className?: string;
}

const Hero1 = ({
  heading = "A Collection of Components Built With Shadcn & Tailwind",
  description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  button = {
    text: "Discover all components",
    url: "/",
  },
  className,
}: Hero1Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container text-center">
        <div className="mx-auto flex max-w-5xl flex-col gap-6">
          <h1 className="text-3xl font-semibold lg:text-6xl">{heading}</h1>
          <p className="text-balance text-muted-foreground lg:text-lg">
            {description}
          </p>
        </div>
        <Button asChild size="lg" className="mt-10">
          <a href={button.url}>{button.text}</a>
        </Button>
      </div>
    </section>
  );
};

export { Hero1 };
