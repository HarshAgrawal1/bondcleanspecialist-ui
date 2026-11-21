import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { PHONE } from "@/lib/data";

export const metadata: Metadata = { title: "Terms & Conditions | Bond Clean Specialist" };

const SECTIONS = [
  {
    paras: [
      "Bond Clean Specialist Pty Ltd",
      "Effective Date: 5 November 2026",
      "Welcome to Bond Clean Specialist Pty Ltd. These Terms & Conditions govern the booking and provision of cleaning services by our company.",
      "By confirming a booking, customers agree to the terms provided to them before booking, together with the accepted quotation and any additional written agreements.",
      "We may update these terms periodically by publishing a revised version on our website at https://bondcleanspecialist.com.au. Changes do not automatically apply to existing confirmed bookings.",
      "Nothing in these terms excludes, restricts or modifies any rights or remedies available under Australian Consumer Law or other applicable legislation.",
    ],
  },
  {
    heading: "1. Definitions and Interpretation",
    paras: ["For the purposes of these Terms & Conditions:"],
    bullets: [
      "Company, We, Us or Our: Bond Clean Specialist Pty Ltd and its authorised representatives.",
      "Customer or You: Any individual, business, tenant, property owner or organisation booking our services.",
      "Cleaner: Any employee or authorised independent contractor assigned to perform cleaning services.",
      "Services: Cleaning services agreed upon in the quotation or booking confirmation.",
      "Property: The residential or commercial premises where cleaning services are provided.",
      "Managing Agent: A real estate agent or property manager responsible for inspecting or managing the property.",
      "Bond Cleaning: End of lease cleaning performed according to the agreed cleaning checklist and scope.",
      "Heavily Soiled: A property or area containing excessive dirt, grease, mould, dust, stains, pet hair or other contamination beyond ordinary cleaning requirements.",
      "Re-Clean Guarantee: Our voluntary seven-day guarantee for eligible cleaning issues within the original bond cleaning scope.",
    ],
  },
  {
    heading: "2. General Conditions",
    paras: [
      "These terms apply to cleaning services provided by Bond Clean Specialist, subject to applicable law and any written agreement with the customer.",
      "Customers are responsible for providing accurate property information when requesting a quotation.",
      "Our cleaning teams will perform the agreed services with due care and skill.",
      "We reserve the right to decline or suspend services where there are genuine safety concerns, subject to applicable contractual and consumer rights.",
    ],
  },
  {
    heading: "3. Our Cleaning Services",
    paras: ["Our services may include:"],
    bullets: [
      "Bond Cleaning / End of Lease Cleaning",
      "Carpet Steam Cleaning",
      "Spring Cleaning and Deep Cleaning",
      "Window Cleaning",
      "Office and Commercial Cleaning",
      "Builder Cleaning",
      "Airbnb Cleaning",
      "Oven and BBQ Cleaning",
      "Upholstery Cleaning",
      "Pressure Washing",
      "Other cleaning services agreed upon in writing",
    ],
    after: [
      "Only the services and areas specified in the accepted quotation are included in the booking.",
      "Additional work must be approved before it is performed.",
    ],
  },
  {
    heading: "4. Quotations and Pricing",
    paras: [
      "All quotations are prepared using information provided by the customer.",
      "Quoted prices generally assume standard property sizes, reasonable accessibility and ordinary cleaning conditions unless otherwise specified.",
      "Additional charges may apply for:",
    ],
    bullets: [
      "Heavy mould or specialist mould treatment",
      "Full or partial wall washing",
      "Excessive pet hair",
      "Heavily soiled areas requiring additional cleaning",
      "Venetian blinds and other specialist blinds",
      "Excessive grease, stains or residue",
      "Additional rooms or areas not included in the original quotation",
      "External windows or specialist access requirements",
      "Excessive rubbish removal",
      "Additional cleaning time caused by unusual property conditions",
      "Other services outside the agreed cleaning checklist",
    ],
    after: [
      "We will notify customers of any proposed additional charges and obtain approval before performing additional work.",
      "If the customer declines additional work, we will complete the original agreed scope where reasonably possible. Any excluded work will be identified clearly.",
    ],
  },
  {
    heading: "5. Booking Confirmation and Deposits",
    paras: ["Bookings are confirmed once:"],
    bullets: [
      "The customer accepts the quotation.",
      "The customer agrees to the applicable Terms & Conditions.",
      "Any required deposit has been received.",
      "Written booking confirmation has been issued by Bond Clean Specialist.",
    ],
    after: [
      "Deposit amounts and payment deadlines will be communicated before confirmation.",
      "A requested booking date is not guaranteed until the booking is confirmed.",
    ],
  },
  {
    heading: "6. Cancellation and Rescheduling Policy",
    paras: [],
    subsections: [
      {
        heading: "Cancellation Policy",
        paras: ["Customers may cancel their booking by contacting Bond Clean Specialist."],
        bullets: [
          "48 hours or more before the scheduled service: Free cancellation, with no cancellation fee.",
          "Less than 48 hours before the scheduled service: A $50 cancellation fee may apply, provided the fee was disclosed and agreed upon before booking and is reasonable in the circumstances.",
          "Any applicable cancellation fee may be deducted from a refundable deposit, subject to applicable law.",
          "Cancellation fees will not apply where prohibited by law or where the customer is legally entitled to cancel because of our failure to meet applicable consumer guarantees.",
        ],
      },
      {
        heading: "Rescheduling Policy",
        paras: [
          "Customers should notify us as early as possible when requesting a booking date change.",
          "Rescheduling is subject to cleaner availability and mutual agreement.",
          "Any applicable additional charges will be communicated and agreed upon beforehand.",
          "If Bond Clean Specialist cancels a confirmed service, customers will be offered an appropriate refund or alternative arrangement in accordance with their legal rights.",
        ],
      },
    ],
  },
  {
    heading: "7. Property Access and Customer Responsibilities",
    paras: ["Customers must ensure:"],
    bullets: [
      "Safe and timely access to the property.",
      "Working electricity and running water.",
      "All personal belongings and rubbish are removed where required.",
      "The property is vacant for an unfurnished bond clean, unless otherwise agreed.",
      "All required keys, access codes and parking arrangements are provided.",
      "Fragile and valuable items are secured.",
      "Any known hazards are disclosed before the service.",
      "Cleaning areas are reasonably accessible and free of unnecessary obstructions.",
    ],
    after: [
      "Customers are responsible for arranging property access at the agreed time.",
      "Where access is unavailable, we will attempt to contact the customer to arrange a solution.",
      "Any additional access-related charges must be reasonable, previously disclosed and consistent with applicable law.",
    ],
  },
  {
    heading: "8. Property Condition and Additional Cleaning Requirements",
    paras: [
      "Customers must provide accurate information about the property's condition when requesting a quotation.",
      "If the actual property condition differs materially from the information provided, we may discuss a revised quotation before commencing additional work.",
      "Examples include:",
    ],
    bullets: [
      "Excessive mould or mildew",
      "Heavy grease buildup",
      "Significant wall marks or stains",
      "Excessive pet hair",
      "Heavy dust or construction residue",
      "Large amounts of rubbish",
      "Additional rooms or cleaning areas",
    ],
    after: [
      "Customers may decline additional services.",
      "Declining additional services does not remove our responsibility to perform the original agreed services with due care and skill.",
    ],
  },
  {
    heading: "9. Cleaning Standards and Limitations",
    paras: [
      "Bond Clean Specialist aims to deliver professional cleaning services to a real estate standard, based on the agreed cleaning checklist.",
      "Cleaning results may depend on:",
    ],
    bullets: [
      "Property age and condition",
      "Existing wear and tear",
      "Permanent stains or discolouration",
      "Damaged surfaces or fixtures",
      "Previous maintenance",
      "Accessibility and safety restrictions",
    ],
    after: [
      "Normal cleaning services may not remove permanent stains, corrosion, damaged grout, deep-set discolouration or structural defects.",
      "Any limitations identified during cleaning will be communicated to the customer where practical.",
    ],
  },
  {
    heading: "10. Seven-Day Re-Clean Guarantee",
    paras: [
      "Bond Clean Specialist Pty Ltd provides a 7-Day Re-Clean Guarantee for eligible Bond Cleaning and End of Lease Cleaning services.",
    ],
    subsections: [
      {
        heading: "Eligibility and Reporting",
        paras: [
          "Customers must report eligible cleaning issues within seven calendar days of the original cleaning service completion.",
          "Customers should provide:",
        ],
        bullets: [
          "Booking details and property address",
          "The real estate agent's inspection report or cleaning feedback",
          "Supporting photographs where available",
          "Details of the areas requiring attention",
        ],
      },
      {
        heading: "Re-Clean Attendance Within 72 Hours",
        paras: [
          "Once an eligible re-clean request has been received and verified, our cleaning team will attend the property within 72 hours to rectify the reported cleaning issues.",
          "If the property cannot be accessed within that period, we will arrange the earliest mutually agreed appointment.",
        ],
      },
      {
        heading: "What Is Covered",
        paras: [
          "The re-clean guarantee covers eligible cleaning issues within the original agreed bond cleaning scope.",
          "Re-cleaning is provided at no additional charge for eligible areas.",
        ],
      },
      {
        heading: "Exclusions",
        paras: ["The voluntary guarantee does not cover:"],
        bullets: [
          "Services not included in the original quotation",
          "New dirt or damage occurring after cleaning",
          "Natural wear and tear",
          "Permanent stains or damaged surfaces",
          "Areas excluded from the original cleaning scope",
          "Issues arising from subsequent occupancy or use",
          "Additional cleaning services declined by the customer",
        ],
      },
      {
        heading: "Consumer Rights",
        paras: [
          "Our seven-day guarantee is an additional voluntary benefit and does not limit customers' statutory rights or remedies under Australian Consumer Law.",
        ],
      },
    ],
  },
  {
    heading: "11. Cleaning Inspection and Customer Satisfaction",
    paras: [
      "Customers are welcome and encouraged to inspect the property after the cleaning service has been completed and before our cleaners leave.",
      "If any cleaning concerns are identified during the inspection, customers should inform our cleaning team immediately.",
      "Our cleaners will review the concerns and, where they relate to the agreed cleaning scope, make reasonable efforts to rectify them on the spot without additional charge.",
      "If the customer is unavailable for an immediate inspection, they may contact our office to discuss any concerns.",
      "An inspection, or the absence of an inspection, does not remove any statutory consumer rights.",
    ],
  },
  {
    heading: "12. Refund Policy",
    paras: [
      "Bond Clean Specialist is committed to providing professional cleaning services and resolving customer concerns fairly.",
      "As cleaning is a labour-based service, we do not generally provide refunds for a change of mind after the agreed service has been completed.",
      "Customers are encouraged to report cleaning concerns promptly so that we can inspect the work and arrange appropriate rectification.",
      "For eligible bond cleaning services, our voluntary seven-day re-clean guarantee may apply.",
      "Refund requests and other remedies will be assessed in accordance with Australian Consumer Law.",
      "Nothing in this policy excludes, restricts or modifies any legal right to a refund, compensation, repeat service or other applicable remedy.",
    ],
  },
  {
    heading: "13. Payment Terms",
    paras: [
      "Payment requirements will be specified in the quotation, invoice or booking confirmation.",
      "Accepted payment methods may include bank transfer and other payment options made available by Bond Clean Specialist.",
      "Customers must pay agreed charges by the specified due date, subject to their rights to dispute an invoice or seek a lawful remedy.",
      "Any overdue payment arrangements or debt recovery actions will comply with applicable Australian laws.",
    ],
  },
  {
    heading: "14. Cleaning Safety and Service Limitations",
    paras: [
      "Our cleaners may decline or suspend work that presents an unreasonable safety risk.",
      "Examples include:",
    ],
    bullets: [
      "Hazardous chemicals or substances",
      "Unsafe electrical installations",
      "Dangerous structural conditions",
      "Unsafe heights or inaccessible areas",
      "Uncontrolled animals",
      "Biological hazards requiring specialist treatment",
    ],
    after: [
      "We will communicate with the customer where practical and discuss appropriate next steps.",
      "Any cancellation, rescheduling or refund arrangements arising from safety concerns will be handled in accordance with the booking agreement and applicable law.",
    ],
  },
  {
    heading: "15. Property Damage and Liability",
    paras: [
      "Our cleaning teams will exercise reasonable care when performing services.",
      "Customers should notify us promptly if they believe damage occurred during cleaning and provide supporting photographs or information where available.",
      "We will investigate reported incidents and respond appropriately.",
      "We are not responsible for pre-existing damage or deterioration that was not caused by our services.",
      "Nothing in these terms excludes liability or remedies that cannot lawfully be excluded under Australian Consumer Law.",
    ],
  },
  {
    heading: "16. Subcontractors and Cleaning Teams",
    paras: [
      "Bond Clean Specialist may engage employees or authorised independent cleaning contractors to perform services.",
      "All cleaning teams are expected to follow applicable service standards, safety requirements and agreed cleaning instructions.",
      "Engaging a subcontractor does not remove Bond Clean Specialist's responsibilities to customers under applicable law.",
    ],
  },
  {
    heading: "17. Photographs and Quality Assurance",
    paras: ["Our cleaning teams may take photographs before, during and after cleaning for:"],
    bullets: [
      "Service documentation",
      "Quality assurance",
      "Property condition records",
      "Cleaning issue verification",
      "Complaint and dispute resolution",
    ],
    after: [
      "Photographs will be handled in accordance with our Privacy Policy and applicable law.",
      "Identifiable customer property photographs will not be used for public marketing without appropriate permission.",
    ],
  },
  {
    heading: "18. Complaints and Dispute Resolution",
    paras: [
      "We aim to resolve customer complaints fairly and promptly.",
      "Customers may submit complaints to:",
      "Bond Clean Specialist Pty Ltd",
      "Email: info@bondcleanspecialist.com.au",
      `Phone: ${PHONE}`,
      "Website: https://bondcleanspecialist.com.au",
      "Please include booking details, a description of the issue and any relevant supporting photographs or documents.",
      "We will review the complaint and work towards a reasonable resolution.",
      "Customers retain their rights to seek assistance from Queensland's Office of Fair Trading, the Australian Competition and Consumer Commission where appropriate, or other relevant dispute resolution bodies.",
    ],
  },
  {
    heading: "19. Privacy and Personal Information",
    paras: [
      "Bond Clean Specialist collects and uses customer information for legitimate business purposes, including quotations, bookings, service delivery, invoicing and customer communications.",
      "Personal information will be handled in accordance with our separate Privacy Policy and applicable privacy laws.",
    ],
  },
  {
    heading: "20. Changes to Terms & Conditions",
    paras: [
      "We may update these Terms & Conditions periodically.",
      "Updated terms will be published on our website.",
      "Changes will not automatically alter an existing confirmed booking without agreement where required by law.",
    ],
  },
  {
    heading: "21. Governing Law",
    paras: ["These Terms & Conditions are governed by the applicable laws of Queensland and Australia."],
  },
  {
    heading: "Bond Clean Specialist Pty Ltd",
    paras: [
      "Professional Bond Cleaning, End of Lease Cleaning and Commercial Cleaning Services across Brisbane and the Gold Coast.",
      "Email: info@bondcleanspecialist.com.au",
      `Phone: ${PHONE}`,
      "Website: https://bondcleanspecialist.com.au",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      lede="Bond Clean Specialist Pty Ltd. Effective date: 5 November 2026."
      sections={SECTIONS}
    />
  );
}
