import { Section, Container } from "@/components/craft";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import Link from "next/link";

import Porsche from "@/public/porsche.png";
import BMW from "@/public/bmw.png";

const Hero = () => {
  return (
    <Section className="not-prose">
      <Container>
        <div className="w-full h-full m-auto max-w-5xl md:py-10 py-4 flex flex-col gap-8">
          {/* Large Text */}
          <h1 className="text-3xl md:text-6xl font-normal">
            Elevating the art of automotive detailing{" "}
            <Image
              className="inline my-auto w-24 md:w-48 md:-mt-6 -mt-3"
              width={192}
              height={108}
              src={Porsche}
              alt=""
            />{" "}
            with an unyielding dedication{" "}
            <Image
              className="inline my-auto w-24 md:w-48 md:-mt-2 -mt-3"
              width={192}
              height={108}
              src={BMW}
              alt=""
            ></Image>{" "}
            to meticulous spotlessness.
          </h1>
          {/* logo features */}
          <div className="p-4 flex flex-wrap border rounded-lg gap-6 items-center w-fit">
            <p>As seen in:</p>
            <Image className="h-6 w-fit dark:invert" src={Logo} alt=""></Image>
            <Image className="h-6 w-fit dark:invert" src={Logo} alt=""></Image>
            <Image className="h-6 w-fit dark:invert" src={Logo} alt=""></Image>
          </div>
          {/* End Text */}
          <div className="md:text-lg">
            <p className="hidden md:block">
              We are a team of passionate car enthusiasts who are dedicated to
              providing the highest quality of service to our clients.{" "}
              <Link
                className="hover:opacity-70 transition-all underline"
                href="/book"
              >
                Book Now
              </Link>
            </p>
            <p className="text-xs mt-4">
              <span className="opacity-50">Available now online.</span> Tell us
              what you build next.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
