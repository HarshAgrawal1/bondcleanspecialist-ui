/** Primary + supporting SEO phrases for Bond Clean Specialist. */
export const SEO_KEYWORDS = [
  "Bond Cleaning Brisbane",
  "End of Lease Cleaning Brisbane",
  "Bond Cleaners Brisbane",
  "Professional Bond Cleaning Brisbane",
  "Bond Cleaning Gold Coast",
  "End of Lease Cleaning Gold Coast",
  "Commercial Cleaning Brisbane",
  "Office Cleaning Brisbane",
  "Window Cleaning Brisbane",
  "Professional Cleaning Services Brisbane",
  "Real Estate Standard Cleaning Brisbane",
  "Bond Cleaning Near Me",
  "End of Lease Cleaners Near Me",
  "Vacate Cleaning Brisbane",
  "Rental Property Cleaning Brisbane",
  "Move Out Cleaning Brisbane",
  "Real Estate Bond Cleaning",
  "Bond Cleaning Quotes Brisbane",
  "Affordable Bond Cleaning Brisbane",
] as const;

/** Light description upgrades only — titles stay production-style: "{name} | Bond Clean Specialist". */
const SERVICE_DESC: Record<string, string> = {
  "bond-cleaning":
    "Bond cleaning and end of lease cleaning across Brisbane and the Gold Coast. Quoted to the property for rental move-outs — real estate standard detail.",
  "office-cleaning":
    "Office cleaning and commercial cleaning in Brisbane — one-off or recurring. Workstations, meeting rooms, kitchens and bathrooms, quoted to your floorplate.",
};

export function serviceMetadata(slug: string, fallbackName: string, fallbackIntro: string) {
  return {
    title: `${fallbackName} | Bond Clean Specialist`,
    description: SERVICE_DESC[slug] ?? fallbackIntro,
  };
}

/** Titles match production; descriptions lightly note end-of-lease without keyword-stuffing. */
export function areaMetadata(name: string, region: "Brisbane" | "Gold Coast") {
  return {
    title: `Cleaning in ${name} | Bond Clean Specialist`,
    description: `Bond Clean Specialist provides professional cleaning in ${name}, ${region}. Bond cleans, spring cleans, ovens, carpets and commercial work, quoted to the property.`,
  };
}
