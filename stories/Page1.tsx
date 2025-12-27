import { Cta1 } from "./Cta1";
import { Footer1 } from "./Footer1";
import { Header1 } from "./Header1";
import { Hero4 } from "./Hero4";
import { Feature1 } from "./Feature1";
import { Testimonial1 } from "./Testimonial1";

const Page1 = () => {
  return (
    <>
      <Header1 className="fixed top-0 z-50 w-full left-0 bg-background" />
      <Hero4 />
      <main id="main">
        <Cta1 className="mt-24 lg:mt-32" href="#contact" />
        <Feature1 />
        <Testimonial1 />
      </main>
      <Footer1 />
    </>
  );
};

export { Page1 };
