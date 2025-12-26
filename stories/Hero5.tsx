import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero5 = () => {
  return (
    <section className="h-screen bg-background pt-12 pb-24 w-full relative overflow-hidden">
      <picture>
        <source
          srcSet="https://placehold.co/1920x1080?text=Image"
          media="(min-width: 1024px)"
        />
        <img
          src="https://placehold.co/1920x1080?text=Image"
          alt="Hero"
          className="absolute inset-0 object-cover"
        />
      </picture>

      <div className="absolute inset-0 bg-linear-to-b from-background/0 to-background/80"></div>

      <div className="container absolute top-1/2 -translate-y-1/2 left-0 right-0 px-12">
        <div className="flex flex-col w-full gap-4 text-center max-w-3xl mx-auto">
          <p className="text-sm">BETA RELEASE AVAILABLE</p>

          <h1 className="text-5xl font-bold text-foreground lg:text-[4.2rem]">
            Unveiling MyBusiness Edition 1
          </h1>

          <p className="text-lg">
            CableCore Partnership. Worldwide network. Regional manufacturing
          </p>

          <div className="flex justify-center gap-4">
            <Button className="rounded-full">Enroll in Beta</Button>
            <Button className="rounded-full" variant="outline">
              Book a demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero5 };
