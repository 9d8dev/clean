"use client";

import * as React from "react";
import { Section, Container } from "@/components/craft";
import { Badge } from "./ui/badge";
import Calendar from "./cal";

export default function Form() {
  const [selectedPackage, setSelectedPackage] = React.useState({});
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
              setSelectedPackage({ package: "interior" });
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
              setSelectedPackage({ package: "exterior" });
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
              setSelectedPackage({ package: "maintenance" });
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
          <h1>aslkdjfslfjs</h1>
          <button onClick={() => setStep((prev) => prev - 1)}>Previous</button>
          <button onClick={() => setStep((prev) => prev + 1)}>Next</button>
        </Container>
      )}
      {step === 3 && (
        <Container className="not-prose">
          <Calendar event="30min" />
        </Container>
      )}
    </Section>
  );
}
