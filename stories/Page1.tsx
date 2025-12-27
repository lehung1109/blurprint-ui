import { Footer1 } from "./Footer1";
import { Header1 } from "./Header1";
import { Hero4 } from "./Hero4";

const Page1 = () => {
  return (
    <>
      <Header1 className="fixed top-0 z-50 w-full left-0 bg-background" />
      <Hero4 />
      <main id="main">text main</main>
      <Footer1 />
    </>
  );
};

export { Page1 };
