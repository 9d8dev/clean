"use client";

import * as React from "react";
import { Section, Container } from "@/components/craft";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Calendar from "./cal";

const alacarteItems = [
  {
    name: "engine",
    text: "Engine bay cleaning and dressing",
  },
  {
    name: "leather",
    text: "Leather Cleaning and Conditioning",
  },
  {
    name: "fabric",
    text: "Fabric Protection",
  },
  {
    name: "odor",
    text: "Odor Elimination",
  },
  {
    name: "waxing",
    text: "Waxing/Sealing",
  },
];

export default function Form() {
  const [selectedPackage, setSelectedPackage] = React.useState<string | null>(
    null
  );
  const [alacarte, setAlacarte] = React.useState<AlaCarteStateObject>({
    engine: false,
    leather: false,
    fabric: false,
    odor: false,
    waxing: false,
  });
  const [step, setStep] = React.useState(1);

  return (
    <Section className="not-prose">
      {step === 1 && (
        <Container className="space-y-4">
          <h1>Options</h1>
          {/* Option 1 */}
          <div
            className="border border-black p-4 rounded-md hover:scale-105 transition-all cursor-pointer"
            onClick={() => {
              setSelectedPackage("Interior");
              setStep((prev) => prev + 1);
            }}
          >
            <div className="inline-flex items-center gap-2">
              <Badge>Interior</Badge>
              <Badge variant="outline">$225</Badge>
            </div>
            <p>
              Full vacuum, steam cleaning of floor mats, seats, windows, dash,
              steering wheel, consoles, and trunk. Shampooing where needed. Air
              freshening.
            </p>
          </div>
          {/* Option 2 */}
          <div
            className="border border-black p-4 rounded-md hover:scale-105 transition-all cursor-pointer"
            onClick={() => {
              setSelectedPackage("Exterior");
              setStep((prev) => prev + 1);
            }}
          >
            <div className="inline-flex items-center gap-2">
              <Badge>Exterior</Badge>
              <Badge variant="outline">$275</Badge>
            </div>
            <p>
              Hand wash and dry, clay bar decontamination, wheel and wheel-well
              cleaning and dressing, full waxing and sealing of all paint
              surfaces, trim and plastic restoration, tire dressing, glass
              cleaning.
            </p>
          </div>
          {/* Option 3 */}
          <div
            className="border border-black p-4 rounded-md hover:scale-105 transition-all cursor-pointer"
            onClick={() => {
              setSelectedPackage("Maintenance cleaning");
              setStep((prev) => prev + 1);
            }}
          >
            <div className="inline-flex items-center gap-2">
              <Badge>Maintenance Cleaning</Badge>
              <Badge variant="outline">$135</Badge>
            </div>
            <p>
              Full vacuum, steam cleaning of floor mats, seats, windows, dash,
              steering wheel, consoles, and trunk. Shampooing where needed. Air
              freshening.
            </p>
          </div>
        </Container>
      )}
      {step === 2 && (
        <Container className="not-prose">
          <h1>A La Carte Services</h1>
          <div className="flex flex-col gap-2">
            {alacarteItems.map((item, index) => (
              <Label
                key={index}
                htmlFor={item.name}
                className="font-normal border border-black p-2 rounded-md inline-flex items-center gap-4"
              >
                <Checkbox
                  id={item.name}
                  checked={alacarte[item.name]}
                  onCheckedChange={() =>
                    setAlacarte((prev) => ({
                      ...prev,
                      [item.name]: !prev[item.name],
                    }))
                  }
                />
                <span>{item.text}</span>
              </Label>
            ))}
          </div>
          <button onClick={() => setStep((prev) => prev - 1)}>Previous</button>
          <button onClick={() => setStep((prev) => prev + 1)}>Next</button>
        </Container>
      )}
      {step === 3 && (
        <Container className="not-prose">
          <Calendar packageType={selectedPackage} alacarte={alacarte} />
        </Container>
      )}
    </Section>
  );
}
