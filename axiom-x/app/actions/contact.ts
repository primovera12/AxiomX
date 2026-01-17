"use server";

import { contactSchema } from "@/lib/validations";

export async function submitContactForm(formData: FormData) {
  const rawData = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  // Validate the form data
  const validatedFields = contactSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      error: "Invalid form data. Please check your inputs.",
    };
  }

  const { fullName, email, message } = validatedFields.data;

  try {
    // Log the submission (for now)
    // In production, you would:
    // - Send an email notification
    // - Store in database
    // - Integrate with CRM
    console.log("Contact form submission:", {
      fullName,
      email,
      message,
      submittedAt: new Date().toISOString(),
    });

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      success: true,
      message: "Thank you for your message. We'll get back to you soon!",
    };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      error: "Failed to send message. Please try again later.",
    };
  }
}
