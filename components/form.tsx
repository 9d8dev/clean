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
import CountUp from "react-countup";

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
  const [acceptTerms, setAcceptTerms] = React.useState<boolean>(false);

  const [notes, setNotes] = React.useState<string>("");
  const [step, setStep] = React.useState(1);

  /* CALCULATE TOTAL COST ESTIMATE */
  const data = calculateTotalCostEstimate(
    selectedPackage,
    alacarte,
    paintCorrection
  );
  const { minPrice = 0, maxPrice = 0, itemizedList } = data ?? {};

  return (
    <Section className="not-prose">
      {step === 1 && (
        <div>
          <Container className="max-w-2xl">
            <h1 className="text-2xl mb-6">Start by selecting a base package</h1>
            <div className="grid grid-cols-2 gap-4">
              {/* Option 1 */}
              <Option
                title="Interior & Exterior"
                image={Exterior}
                price={450}
                description="All the services of interior and exterior cleaning in a bundled package."
                onClick={() => {
                  setSelectedPackage("Interior & Exterior");
                  setStep((prev) => prev + 1);
                }}
              />

              {/* Option 2 */}
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

              {/* Option 3 */}
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

              {/* Option 4 */}
              <Option
                title="Maintenance Cleaning"
                image={Service}
                price={150}
                description="This package is ideal for our repeat customers with well-maintained cars seeking the benefits of hand washing. This package includes: exterior wash, interior vacuuming, and window washing."
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
          <div className="mb-4 text-xs">
            <p>
              *Paint correction involves removing surface imperfections like
              swirl marks, scratches, and oxidation from a vehicle&apos;s paint.
              This process uses advanced polishing techniques to restore a
              smooth, glossy finish.
            </p>
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
        <Container className="not-prose w-full max-w-2xl">
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
        <Container className="not-prose max-w-2xl bg-accent/25 border rounded-lg flex flex-col gap-4">
          <div className="flex justify-between gap-4">
            <p>{itemizedList?.package.name}</p>
            <p className="font-mono py-1 px-2 border rounded-md bg-accent/50">
              $<CountUp end={itemizedList?.package.price || 0} />
            </p>
          </div>
          {itemizedList?.alacarte.map((item, index) => (
            <div className="flex justify-between gap-4" key={index}>
              <p>{alacarteList[item?.item]}</p>
              <p className="font-mono py-1 px-2 border rounded-md bg-accent/50">
                $<CountUp end={item?.min} /> - $<CountUp end={item?.max} />
              </p>
            </div>
          ))}{" "}
          {paintCorrection && (
            <div className="flex justify-between gap-4">
              <p>Paint correction</p>
              <p className="font-mono py-1 px-2 border rounded-md bg-accent/50">
                starting at $500
              </p>
            </div>
          )}
          <hr />
          <div className="flex justify-between gap-4 font-medium">
            <p>Estimated Total</p>
            <p className="font-mono py-1 px-2 border rounded-md bg-accent/50">
              $<CountUp end={minPrice} /> - $<CountUp end={maxPrice} />
            </p>
          </div>
          <p className="text-xs">
            *This is purely an estimate. We reserve the right to increase or
            decrease the price at will based on further assessment. Before we
            begin work on your car, we will clearly communicate the cost to you.
          </p>
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
        <Container className="not-prose max-w-2xl bg-accent/25 border rounded-lg flex flex-col gap-4">
          <div className="text-xs space-y-2">
            <p>
              Client and anyone claiming on behalf of Client releases and
              forever discharges Curiously Clean and its affiliates, successors
              and assigns, officers, employees, representatives, partners,
              agents, subsidiaries and anyone claiming through them
              (collectively, the “Released Parties”), in their individual and/or
              corporate capacities from any and all claims, liabilities,
              obligations, promises, agreements, disputes, demands, damages,
              causes of action of any nature and kind, known or unknown, which
              Client has or ever has had or may in the future have against
              Curiously Clean or any of the Released Parties arising out of or
              relating to the use of Curiously Clean&apos;s services and
              facilities (“Claims”).
            </p>
            <p>
              In exchange for the release of Claims, Curiously Clean will
              provide Client its agreed upon services. In consideration of such
              access to the services and facilities, Client agrees to accept the
              access to Curiously Clean&apos;s services as full and complete
              settlement and satisfaction of any present and prospective claims.
              Further, Client hereby acknowledges and agrees that all sales and
              services provided by Curiously Clean are final and not refundable.
            </p>
          </div>
          <span className="text-xs italic">
            *By checking this box you are agreeing to the terms listed.
          </span>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={acceptTerms}
              onCheckedChange={() => setAcceptTerms((prev) => !prev)}
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col"
            >
              Accept terms and conditions
            </label>
          </div>
          <p></p>
          <div className="flex gap-2 mt-6">
            <Button
              variant="secondary"
              onClick={() => setStep((prev) => prev - 1)}
            >
              Previous
            </Button>
            <Button
              onClick={() => setStep((prev) => prev + 1)}
              disabled={!acceptTerms}
            >
              Book
            </Button>
          </div>
        </Container>
      )}

      {step === 7 && (
        <Container className="not-prose">
          <Calendar
            packageType={selectedPackage}
            alacarte={alacarte}
            paintCorrection={paintCorrection}
            notes={notes}
          />
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
    className="border p-4 md:p-6 bg-accent/50 rounded-md hover:bg-accent transition-all cursor-pointer flex flex-col gap-4 col-span-1"
    onClick={onClick}
  >
    {image && (
      <div className="h-56 rounded-md overflow-hidden flex items-center justify-center">
        <Image src={image} alt={title} />
      </div>
    )}
    <div className="flex-col md:flex-row flex justify-between items-start md:items-center gap-6">
      <h3 className="text-xs lg:text-xl font-semibold">{title}</h3>
      <p className="text-xs md:text-xl px-2 py-1 border rounded-sm bg-accent">
        ${price}
      </p>
    </div>
    <hr />
    <p className="text-xs md:text-base">{description}</p>
  </div>
);
