import data from "./site-data.json";

export type Service = {
  slug: string;
  name: string;
  short: string;
  img: string;
  h1: string;
  intro: string;
  body: string[];
  why: [string, string][];
  faqs: [string, string][];
};

export const SERVICES = data.services as unknown as Service[];
export const GC_AREAS = data.goldCoast as string[];
export const BNE_AREAS = data.brisbane as string[];

export function slugify(name: string) {
  return name.toLowerCase().replace(/&/g, "and").replace(/ /g, "-");
}

export type Area = { name: string; region: "Brisbane" | "Gold Coast"; slug: string };

export const AREAS: Area[] = [
  ...GC_AREAS.map((name) => ({ name, region: "Gold Coast" as const, slug: slugify(name) })),
  ...BNE_AREAS.map((name) => ({ name, region: "Brisbane" as const, slug: slugify(name) })),
];

export const PHONE = "0422 555 984";
export const PHONE_HREF = "tel:0422555984";
export const EMAIL = "info@bondcleanspecialist.com.au";
export const ABN = "48 698 981 074";
