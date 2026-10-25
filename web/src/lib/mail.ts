import nodemailer from "nodemailer";
import type { QuoteInput } from "./quote-schema";
import { EMAIL } from "./data";

export function isSmtpConfigured() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASSWORD &&
      (process.env.SMTP_TO || EMAIL)
  );
}

/** Escape user text before putting it in HTML email bodies. */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Remove CR/LF so form fields cannot inject extra email headers. */
function oneLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function line(label: string, value: string | undefined | null) {
  if (!value) return "";
  return `<tr><td style="padding:4px 12px 4px 0;vertical-align:top;color:#555">${escapeHtml(label)}</td><td style="padding:4px 0">${escapeHtml(value)}</td></tr>`;
}

function buildHtml(reference: string, data: QuoteInput) {
  const details =
    data.service === "bond"
      ? [
          line("Bed + Study", data.bedStudy),
          line("Bathroom", data.bathroom),
          line("Living area", data.livingArea),
          line("Furnished", data.furnished),
          line("House type", data.houseType),
          line("Blinds", data.blinds),
          line("Extras", (data.extras ?? []).join(", ") || "None"),
        ].join("")
      : line("Hours", data.hours);

  return `
    <div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.45;color:#111">
      <h2 style="margin:0 0 12px">New quote request — ${escapeHtml(reference)}</h2>
      <p style="margin:0 0 16px">A new ${data.service === "bond" ? "bond" : "spring"} cleaning quote was submitted on the website.</p>
      <table style="border-collapse:collapse">
        ${line("Name", data.name)}
        ${line("Email", data.email)}
        ${line("Phone", data.phone)}
        ${line("Location", data.location)}
        ${line("Job date", data.jobDate)}
        ${line("Service", data.service)}
        ${details}
        ${line("Message", data.message || "—")}
      </table>
    </div>
  `;
}

export async function sendQuoteNotification(reference: string, data: QuoteInput) {
  if (!isSmtpConfigured()) return { sent: false as const, reason: "smtp_not_configured" };

  const host = process.env.SMTP_HOST!;
  const port = Number(process.env.SMTP_PORT || 465);
  const secure = process.env.SMTP_SECURE
    ? process.env.SMTP_SECURE === "true"
    : port === 465;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const to = process.env.SMTP_TO || EMAIL;
  const from = process.env.SMTP_FROM || process.env.SMTP_USER!;
  const safeName = oneLine(data.name);
  const safeLocation = oneLine(data.location);
  const safeEmail = oneLine(data.email);

  await transporter.sendMail({
    from: `"Bond Clean Specialist" <${from}>`,
    to,
    replyTo: safeEmail,
    subject: oneLine(`New quote ${reference} — ${safeName} (${safeLocation})`),
    text: [
      `New quote request ${reference}`,
      `Service: ${data.service}`,
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Location: ${data.location}`,
      `Job date: ${data.jobDate}`,
      data.message ? `Message: ${data.message}` : "",
    ]
      .filter(Boolean)
      .join("\n"),
    html: buildHtml(reference, data),
  });

  return { sent: true as const };
}
