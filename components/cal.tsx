"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { constructCalendarURL } from "@/lib/utils/calendar-url";

const serviceValues: AlaCarteServiceValues = {
  engine: "Engine bay cleaning and dressing",
  leather: "Leather Cleaning and Conditioning",
  fabric: "Fabric Protection",
  odor: "Odor Elimination",
  waxing: "Waxing/Sealing",
};

const baseURL = "https://cal.com/curiouslyclean/auto-detailing";

export default function Calendar({
  packageType,
  alacarte,
  paintCorrection,
  notes,
}: {
  packageType: string | null;
  alacarte: AlaCarteStateObject;
  paintCorrection: boolean;
  notes: string;
}) {
  const calendarURL = constructCalendarURL(
    alacarte,
    serviceValues,
    packageType,
    paintCorrection,
    notes,
    baseURL
  );
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <Cal
      calLink={calendarURL || baseURL}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view" }}
    />
  );
}
