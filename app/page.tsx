import { Main } from "@/components/craft";
import Hero from "@/components/layout/hero";
import Feature from "@/components/layout/feature";
import Calendar from "@/components/cal";
import { CalendarIcon } from "lucide-react";

import Link from "next/link";

export default function Home() {
  return (
    <Main>
      <Hero />
      <Feature />
      {/* <Calendar event="30min" /> */}
      <BottomBar />
    </Main>
  );
}

const BottomBar = () => {
  return (
    <Link
      className="fixed flex not-prose bottom-2 right-2 left-2 rounded-lg p-4 bg-primary focus:bg-primary/50 text-primary-foreground md:hidden items-center justify-center gap-2 font-medium"
      href="/book"
    >
      <CalendarIcon className="w-5 h-5" />
      Book Now
    </Link>
  );
};
