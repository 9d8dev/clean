// Layout
import * as Craft from "@/components/craft";
import Balancer from "react-wrap-balancer";
import Link from "next/link";

// Icons
import { Car } from "lucide-react";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Car className="w-6 h-6" />,
    title: "Interior Cleaning",
    description:
      "Full vacuum, steam cleaning of floor mats, seats, windows, dash, steering wheel, consoles, and trunk. Shampooing where needed. Air freshening.",
  },
  {
    icon: <Car className="w-6 h-6" />,
    title: "Exterior Cleaning",
    description:
      "Hand wash and dry, clay bar decontamination, wheel and wheel-well cleaning and dressing, full waxing and sealing of all paint surfaces, trim and plastic restoration, tire dressing, glass cleaning.",
  },
  {
    icon: <Car className="w-6 h-6" />,
    title: "Maintenance Cleaning",
    description:
      "Full vacuum, steam cleaning of floor mats, seats, windows, dash, steering wheel, consoles, and trunk. Shampooing where needed. Air freshening.",
  },
];

const Feature = () => {
  return (
    <Craft.Section className="border-t">
      <Craft.Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>Our Car Cleaning Services</Balancer>
          </h3>
          <h4 className="text-2xl font-light opacity-70">
            <Balancer>
              Choose from our selection of premium detailing packages
            </Balancer>
          </h4>

          <div className="grid md:grid-cols-3 mt-6 gap-6 md:mt-12">
            {featureText.map(({ icon, title, description }, index) => (
              <Link href="/book" className="flex flex-col gap-4" key={index}>
                {icon}
                <h4 className="text-xl text-primary">{title}</h4>
                <p className="text-base opacity-75">{description}</p>
              </Link>
            ))}
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default Feature;
