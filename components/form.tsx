"use client";

import * as React from "react";
import { Section, Container } from "@/components/craft";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import Calendar from "./cal";
import { alacarteItems, alacarteList } from "@/lib/utils/alacarte-items";
import { calculateTotalCostEstimate } from "@/lib/utils/calculate-estimate";

export default function Form() {
  /* STATE DECLARATIONS */
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
  const [paintCorrection, setPaintCorrection] = React.useState<boolean>(false);
  const [notes, setNotes] = React.useState<string>("");
  const [step, setStep] = React.useState(1);

  /* CALCULATE TOTAL COST ESTIMATE */
  const data = calculateTotalCostEstimate(selectedPackage, alacarte);
  const { minPrice = 0, maxPrice = 0, itemizedList } = data ?? {};

  return (
    <Section className="not-prose">
      {step === 1 && (
        <Container className="space-y-4">
          <h1>Start by selecting a base package</h1>
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
          <Button onClick={() => setStep((prev) => prev - 1)}>Previous</Button>
          <Button onClick={() => setStep((prev) => prev + 1)}>Next</Button>
        </Container>
      )}
      {step === 3 && (
        <Container className="not-prose">
          <div className="flex flex-row items-center justify-between rounded-lg border p-4">
            <Label className="text-base" htmlFor="paintcorrection">
              Are you interested in paint correction?
            </Label>
            <div className="inline-flex items-center gap-2">
              <Switch
                id="paintcorrection"
                checked={paintCorrection}
                onCheckedChange={() => setPaintCorrection((prev) => !prev)}
              />
              {paintCorrection ? <Label>Yes</Label> : <Label>No</Label>}
            </div>
          </div>
          <Button onClick={() => setStep((prev) => prev - 1)}>Previous</Button>
          <Button onClick={() => setStep((prev) => prev + 1)}>Next</Button>
        </Container>
      )}
      {step === 4 && (
        <Container className="not-prose">
          <Label htmlFor="notes" className="text-base">
            Any additional things we should be aware of?
          </Label>
          <Textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            name="notes"
            id="notes"
            className="min-h-[200px] resize-none"
          />
          <Button onClick={() => setStep((prev) => prev - 1)}>Previous</Button>
          <Button onClick={() => setStep((prev) => prev + 1)}>Next</Button>
        </Container>
      )}
      {step === 5 && (
        <Container className="not-prose">
          Total Cost estimate: ${minPrice} - ${maxPrice}
          <p>
            {itemizedList?.package.name}: ${itemizedList?.package.price}
          </p>
          {itemizedList?.alacarte.map((item, index) => (
            <p key={index}>
              {alacarteList[item?.item]}: ${item?.min} - ${item?.max}
            </p>
          ))}
          <Button onClick={() => setStep((prev) => prev - 1)}>Previous</Button>
          <Button onClick={() => setStep((prev) => prev + 1)}>Next</Button>
        </Container>
      )}
      {step === 6 && (
        <Container className="not-prose">
          <Calendar
            packageType={selectedPackage}
            alacarte={alacarte}
            paintCorrection={paintCorrection}
            notes={notes}
          />
          <Button onClick={() => setStep((prev) => prev - 1)}>Previous</Button>
          <Button onClick={() => setStep((prev) => prev + 1)}>Next</Button>
        </Container>
      )}
    </Section>
  );
}
