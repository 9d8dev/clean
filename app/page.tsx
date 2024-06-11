import { Main } from "@/components/craft";
import Hero from "@/components/layout/hero";
import Feature from "@/components/layout/feature";
import Calendar from "@/components/cal";

import Link from "next/link";

export default function Home() {
  return (
    <Main>
      <Hero />
      <Feature />
      {/* <Calendar event="30min" /> */}
    </Main>
  );
}

const BottomBar = () => {
  <Link href="/book">Book Now</Link>;
};
