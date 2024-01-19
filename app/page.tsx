import About from "@/components/About";
import FindUs from "@/components/FindUs";

import Hero from "@/components/Hero/Hero";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />

      <Menu />

      <FindUs />
    </main>
  );
}
