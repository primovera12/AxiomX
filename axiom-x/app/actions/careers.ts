"use server";

import { careersSchema } from "@/lib/validations";

export async function submitCareersForm(formData: FormData) {
  const rawData = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    position: formData.get("position"),
    message: formData.get("message"),
  };

  // Validate the form data
  const validatedFields = careersSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      error: "Invalid form data. Please check your inputs.",
    };
  }

  const { fullName, email, phone, position, message } = validatedFields.data;

  try {
    // Log the submission (for now)
    // In production, you would:
    // - Send an email notification
    // - Store in database
    // - Integrate with HR system
    console.log("Careers form submission:", {
      fullName,
      email,
      phone,
      position,
      message,
      submittedAt: new Date().toISOString(),
    });

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      success: true,
      message: "Thank you for your application! We'll review it and get back to you soon.",
    };
  } catch (error) {
    console.error("Careers form error:", error);
    return {
      error: "Failed to submit application. Please try again later.",
    };
  }
}
