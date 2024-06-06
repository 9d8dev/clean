export function constructCalendarURL(
  alacarte: AlaCarteStateObject,
  serviceValues: AlaCarteServiceValues,
  packageType: string | null,
  baseURL: string
): string | null {
  const url = new URL(baseURL);
  const params = url.searchParams;

  if (!packageType) return null;
  params.append("package", packageType);

  for (const [key, value] of Object.entries(alacarte)) {
    if (value && serviceValues[key as keyof AlaCarteServiceValues]) {
      params.append(
        "alacarte",
        serviceValues[key as keyof AlaCarteServiceValues]
      );
    }
  }

  const trimmedURL = url.pathname + url.search;
  return trimmedURL;
}
