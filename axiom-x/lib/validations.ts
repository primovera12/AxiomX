import { z } from "zod";

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
});

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export const trackingSchema = z.object({
  trackingNumber: z
    .string()
    .min(5, "Please enter a valid tracking number")
    .max(50, "Tracking number is too long"),
});

export const careersSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(20, "Phone number is too long"),
  position: z
    .string()
    .min(2, "Please enter the position you're applying for")
    .max(100, "Position is too long"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
});

// Type exports
export type ContactFormData = z.infer<typeof contactSchema>;
export type NewsletterFormData = z.infer<typeof newsletterSchema>;
export type TrackingFormData = z.infer<typeof trackingSchema>;
export type CareersFormData = z.infer<typeof careersSchema>;
