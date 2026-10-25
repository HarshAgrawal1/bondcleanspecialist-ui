import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Privacy policy | Bond Clean Specialist" };

const SECTIONS = [
  { paras: ["This privacy policy explains how Bond Clean Specialist collects, uses and looks after the personal information you give us when you request a quote, book a clean, call us or email us. If you have a question about your information, contact us on 0422 555 984 or info@bondcleanspecialist.com.au."] },
  { heading: "Who we are", paras: ["Bond Clean Specialist provides residential and commercial cleaning across Brisbane and the Gold Coast. When this policy says “we” or “us”, it means Bond Clean Specialist."] },
  { heading: "What we collect", paras: [
    "We collect the details you choose to send us. That typically includes your name, phone number, email address, suburb, property type, service required, preferred date, and any notes you add about the property or access. If you call us, we may write down the same type of information so we can quote and book the job.",
    "We do not ask for payment card details through this website. We do not collect extra information from you unless you give it to us as part of an enquiry or booking.",
  ] },
  { heading: "How we use your information", paras: [
    "We use your details to reply to your enquiry, prepare a quote, confirm a booking, talk to you about the visit, and follow up if a reclean is needed. We may also use your contact details to send a practical update about your booking, such as arrival time or access notes.",
    "We do not sell your personal information. We do not use your enquiry details for unrelated marketing lists.",
  ] },
  { heading: "Who we share it with", paras: [
    "Access to enquiry and booking information is limited to the people who need it to quote, schedule or complete the work. If a job requires a specialist visit, only the information needed to carry out that visit is shared with the team doing the work.",
    "We may disclose information if we are required to by law, or if it is necessary to protect our rights, a customer, or the property.",
  ] },
  { heading: "How long we keep it", paras: ["We keep enquiry and booking details for as long as we need them to complete the job, handle a reclean request, or meet ordinary business record needs. If you ask us to update or remove your enquiry details, we will do so unless we still need them for a current booking or a legal reason."] },
  { heading: "Your choices", paras: ["You can ask us what information we hold about your enquiry, ask us to correct it, or ask us to remove it where we no longer need it. Email info@bondcleanspecialist.com.au or call 0422 555 984 and we will help you."] },
  { heading: "This website", paras: ["This website is used to explain our services and collect quote requests. It may use ordinary technical logs needed to operate the site. Do not send sensitive personal information through the quote form unless it is needed for the booking."] },
  { heading: "Changes", paras: [
    "We may update this policy if how we handle information changes. The current version will be the one published on this page.",
    "If you need this policy explained, or you want to talk about your enquiry details, use the contact page.",
  ] },
];

export default function PrivacyPage() {
  return <LegalPage title="Privacy policy" sections={SECTIONS} />;
}
