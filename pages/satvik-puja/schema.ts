import { z } from "zod";

export const satvikPujaSchema = z.object({
  clubName: z
    .string()
    .min(3, "Club name must be at least 3 characters long"),
  clubRegistrationNumber: z
    .string()
    .min(2, "Club registration number is required for verification"),
  pandalName: z
    .string()
    .min(3, "Puja pandal name must be at least 3 characters long"),
  contactPerson: z
    .string()
    .min(2, "Contact person name is required"),
  mobileNumber: z
    .string()
    .min(1, "Mobile number is required")
    .transform((val) => val.trim().replace(/[\s\-()]/g, ""))
    .refine(
      (val) => {
        // Strip leading 0 if someone entered 09830012345
        const normalized = val.startsWith("0") ? val.slice(1) : val;
        return /^(?:\+91|91)?[6-9]\d{9}$/.test(normalized);
      },
      {
        message:
          "Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9 (do not include leading 0)",
      }
    ),
  emailAddress: z
    .string()
    .email("Please enter a valid email address")
    .or(z.literal("")),
  pandalAddress: z
    .string()
    .min(10, "Please provide complete pandal address and locality"),
  mapsLink: z
    .string()
    .url("Please enter a valid URL (e.g. https://maps.app.goo.gl/...)")
    .or(z.literal("")),
  videoLink: z
    .string()
    .url("Please enter a valid video URL")
    .or(z.literal("")),
  agreedToRules: z
    .boolean()
    .refine((val) => val === true, {
      message: "You must accept the Satvik Puja Samman 2026 rules to register",
    }),
});

export type SatvikPujaFormData = z.infer<typeof satvikPujaSchema>;

export const initialSatvikPujaFormData: SatvikPujaFormData = {
  clubName: "",
  clubRegistrationNumber: "",
  pandalName: "",
  contactPerson: "",
  mobileNumber: "",
  emailAddress: "",
  pandalAddress: "",
  mapsLink: "",
  videoLink: "",
  agreedToRules: false,
};
