"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Calendar({
  event,
  packageType,
  alacarte,
}: {
  event: string;
  packageType: string | null;
  alacarte: AlaCarteStateObject;
}) {
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
      calLink={`cameron-youngblood-vynxzq/${event}?package=${packageType}&alacarte.Engine bay cleaning and dressing=${alacarte.engine}&alacarte.Leather Cleaning and Conditioning=${alacarte.leather}&alacarte.Fabric Protection=${alacarte.fabric}&alacarte.Odor Elimination=${alacarte.odor}&alacarte.Waxing/Sealing=${alacarte.waxing}`}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view" }}
    />
  );
}
