import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Terms and conditions | Bond Clean Specialist" };

const SECTIONS = [
  { paras: ["These terms explain how quotes, bookings and cleaning visits work with Bond Clean Specialist. By requesting a quote or confirming a booking, you agree to the terms below. If anything in your written quote is different, the quote you accept is the one that applies."] },
  { heading: "Quotes", paras: [
    "Quotes are based on the details you provide, including the suburb, property type, service required, access and the condition of the property. If those details change, the price and time required may change as well.",
    "A website or phone quote is an estimate until we confirm the scope with you in writing or by message. The final inclusions are what we confirm before the visit.",
  ] },
  { heading: "Bookings", paras: [
    "A booking is confirmed when you accept the quote and we agree a date and time. Please make sure someone can provide access at that time, or that vacant access has been arranged with the agent or owner.",
    "If you need to change or cancel, tell us as soon as you can so we can offer the time to another customer. Late changes may mean we need to rebook rather than keep the original slot.",
  ] },
  { heading: "Access and the property", paras: [
    "The property should be ready for the agreed clean. For a bond clean, it helps if belongings are out so we can reach floors, cupboards and wet areas. Tell us in advance if furniture will still be there, if parking is limited, or if there are pets, alarms or special entry notes.",
    "We work on the areas included in your quote. Extra rooms, extra appliances or a much heavier condition than described may need extra time and a revised price before we continue.",
  ] },
  { heading: "The clean", paras: [
    "We provide professional cleaning to the agreed list. Results depend on the condition of the property, the surfaces, and the time booked. Spring cleaning is charged by the hour, so completion of every requested task depends on the hours booked and the condition of the property.",
    "Stain removal on carpets and upholstery depends on the material, age and type of staining. We discuss realistic results before we start specialised work.",
  ] },
  { heading: "Reclean", paras: ["If something we cleaned is flagged after the job, contact us with the inspection notes or a clear description of the area. Where the miss is ours, we will arrange a reclean. Reclean cover does not apply to extra work that was not in the original quote, to wear and tear, or to issues caused after we left the property."] },
  { heading: "Payment", paras: ["Payment terms are confirmed with your quote. Unless we agree otherwise, payment is due as set out in that quote. We may ask for payment details before a booking is locked in."] },
  { heading: "Limitation", paras: ["We take care with the property while we work. Tell us about fragile items, wet paint, alarm sensors or anything that needs extra care before we arrive. We are not responsible for existing damage, hidden faults, or items that were not made available for cleaning."] },
  { heading: "Changes", paras: ["We may update these terms from time to time. The version on this page applies to new quotes and bookings from the date it is published."] },
];

export default function TermsPage() {
  return <LegalPage title="Terms and conditions" sections={SECTIONS} />;
}
