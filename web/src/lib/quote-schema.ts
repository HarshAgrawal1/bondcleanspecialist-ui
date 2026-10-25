import { z } from "zod";

const base = z.object({
  name: z.string().trim().min(2, "Your name is required"),
  email: z.email("A valid email is required"),
  phone: z.string().trim().min(8, "Phone number is required"),
  location: z.string().trim().min(2, "Location is required"),
  jobDate: z.string().min(1, "Job date is required"),
  message: z.string().trim().max(2000).optional().default(""),
});

export const quoteSchema = z.discriminatedUnion("service", [
  base.extend({
    service: z.literal("bond"),
    bedStudy: z.string().min(1, "Bed+Study is required"),
    bathroom: z.string().min(1, "Bathroom is required"),
    livingArea: z.string().min(1, "Living area is required"),
    furnished: z.string().min(1, "Furnished is required"),
    houseType: z.string().min(1, "House type is required"),
    blinds: z.string().min(1, "Blinds is required"),
    extras: z.array(z.enum(["Carpet", "Pest"])).default([]),
  }),
  base.extend({
    service: z.literal("spring"),
    hours: z.string().min(1, "Number of hours is required"),
  }),
]);

export type QuoteInput = z.infer<typeof quoteSchema>;
