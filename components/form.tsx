"use client";

import * as React from "react";
import { Section, Container } from "@/components/craft";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { alacarteItems, alacarteList } from "@/lib/utils/alacarte-items";
import { calculateTotalCostEstimate } from "@/lib/utils/calculate-estimate";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import Image from "next/image";
import Calendar from "./cal";

import Exterior from "@/public/exterior.jpeg";
import Interior from "@/public/interior.jpeg";
import Service from "@/public/service.jpeg";

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
        <div>
          <Container className="max-w-2xl">
            <h1 className="text-2xl mb-6">Start by selecting a base package</h1>
            <div className="grid gap-4">
              {/* Option 1 */}
              <Option
                title="Interior Cleaning"
                image={Interior}
                price={225}
                description="Full vacuum, steam cleaning of floor mats, seats, windows, dash, steering wheel, consoles, and trunk. Shampooing where needed. Air freshening."
                onClick={() => {
                  setSelectedPackage("Interior");
                  setStep((prev) => prev + 1);
                }}
              />

              {/* Option 2 */}
              <Option
                title="Exterior Cleaning"
                image={Exterior}
                price={275}
                description="Hand wash and dry, clay bar decontamination, wheel and wheel-well cleaning and dressing, full waxing and sealing of all paint surfaces, trim and plastic restoration, tire dressing, glass cleaning."
                onClick={() => {
                  setSelectedPackage("Exterior");
                  setStep((prev) => prev + 1);
                }}
              />

              {/* Option 3 */}
              <Option
                title="Maintenance Cleaning"
                image={Service}
                price={135}
                description="Full vacuum, steam cleaning of floor mats, seats, windows, dash, steering wheel, consoles, and trunk. Shampooing where needed. Air freshening."
                onClick={() => {
                  setSelectedPackage("Maintenance cleaning");
                  setStep((prev) => prev + 1);
                }}
              />
            </div>
          </Container>
        </div>
      )}

      {step === 2 && (
        <Container className="not-prose max-w-2xl">
          <h1>A La Carte Services</h1>
          <div className="flex flex-col gap-2 my-6">
            {alacarteItems.map((item, index) => (
              <Label
                key={index}
                htmlFor={item.name}
                className="font-normal border p-4 rounded-md inline-flex items-center gap-4 cursor-pointer hover:bg-accent bg-accent/25 transition-all"
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
          <div className="flex gap-2">
            <Button
              variant="secondary"
              onClick={() => setStep((prev) => prev - 1)}
            >
              Previous
            </Button>
            <Button onClick={() => setStep((prev) => prev + 1)}>Next</Button>
          </div>
        </Container>
      )}

      {step === 3 && (
        <Container className="not-prose max-w-2xl">
          <div className="flex flex-row items-center justify-between my-6 rounded-lg border p-4">
            <Label className="text-base" htmlFor="paintcorrection">
              Are you interested in paint correction?
            </Label>
            <div className="inline-flex items-center gap-2">
              {paintCorrection ? <Label>Yes</Label> : <Label>No</Label>}
              <Switch
                id="paintcorrection"
                checked={paintCorrection}
                onCheckedChange={() => setPaintCorrection((prev) => !prev)}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="secondary"
              onClick={() => setStep((prev) => prev - 1)}
            >
              Previous
            </Button>
            <Button onClick={() => setStep((prev) => prev + 1)}>Next</Button>
          </div>
        </Container>
      )}

      {step === 4 && (
        <Container className="not-prose">
          <Label htmlFor="notes" className="text-base">
            Any additional things we should be aware of?
          </Label>
          <Textarea
            value={notes}
            placeholder="Enter notes here..."
            onChange={(e) => setNotes(e.target.value)}
            name="notes"
            id="notes"
            className="min-h-[200px] resize-none mt-6"
          />

          <div className="flex gap-2 mt-6">
            <Button
              variant="secondary"
              onClick={() => setStep((prev) => prev - 1)}
            >
              Previous
            </Button>
            <Button onClick={() => setStep((prev) => prev + 1)}>Next</Button>
          </div>
        </Container>
      )}

      {step === 5 && (
        <Container className="not-prose max-w-2xl bg-accent/25 border flex flex-col gap-4">
          <div className="flex justify-between gap-4">
            <p>{itemizedList?.package.name}</p>
            <p className="font-mono py-1 px-2 border rounded-md bg-accent/50">
              ${itemizedList?.package.price}
            </p>
          </div>
          {itemizedList?.alacarte.map((item, index) => (
            <div className="flex justify-between gap-4" key={index}>
              <p>{alacarteList[item?.item]}</p>
              <p className="font-mono py-1 px-2 border rounded-md bg-accent/50">
                ${item?.min} - ${item?.max}
              </p>
            </div>
          ))}{" "}
          <hr />
          <div className="flex justify-between gap-4 font-medium">
            <p>Estimated Total</p>
            <p className="font-mono py-1 px-2 border rounded-md bg-accent/50">
              ${minPrice} - ${maxPrice}
            </p>
          </div>
          <div className="flex gap-2 mt-6">
            <Button
              variant="secondary"
              onClick={() => setStep((prev) => prev - 1)}
            >
              Previous
            </Button>
            <Button onClick={() => setStep((prev) => prev + 1)}>Next</Button>
          </div>
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
          <div className="flex gap-2 mt-6">
            <Button
              variant="secondary"
              onClick={() => setStep((prev) => prev - 1)}
            >
              Previous
            </Button>
            <Button onClick={() => setStep((prev) => prev + 1)}>Next</Button>
          </div>
        </Container>
      )}
    </Section>
  );
}

const Option = ({
  title,
  price,
  description,
  onClick,
  image,
}: {
  title: string;
  price: number;
  description: string;
  image?: StaticImport;
  onClick: () => void;
}) => (
  <div
    className="border p-4 md:p-6 bg-accent/50 rounded-md hover:bg-accent transition-all cursor-pointer flex flex-col gap-4"
    onClick={onClick}
  >
    {image && (
      <div className="h-56 rounded-md overflow-hidden flex items-center justify-center">
        <Image src={image} alt={title} />
      </div>
    )}
    <div className="flex justify-between items-center gap-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-xl px-2 py-1 border rounded-sm bg-accent">${price}</p>
    </div>
    <hr />
    <p>{description}</p>
  </div>
);
